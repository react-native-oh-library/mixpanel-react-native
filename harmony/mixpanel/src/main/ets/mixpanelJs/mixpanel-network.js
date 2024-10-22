import { MixpanelLogger } from "./mixpanel-logger";
import http from '@ohos.net.http';

export class MixpanelHttpError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode;
    }
}

export const MixpanelNetwork = (() => {
    const sendRequest = async ({
        token,
        endpoint,
        data,
        serverURL,
        useIPAddressForGeoLocation,
        retryCount
    }) => {
        retryCount = retryCount || 0;
        const url = `${serverURL}${endpoint}?ip=${+useIPAddressForGeoLocation}`;
        MixpanelLogger.log(token, `Sending request to: ${url}`);
        try {
            let httpRequest = http.createHttp();
            const response = await httpRequest.request(url, {
                method: http.RequestMethod.POST,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                extraData: `data=${JSON.stringify(data)}`,
            });
            if (response.responseCode !== 200) {
                throw new MixpanelHttpError(
                    `HTTP error! status: ${response.responseCode}`,
                    response.responseCode
                );
            }
            const message =
                response === 0
                    ? `${url} api rejected some items`
                    : `Mixpanel batch sent successfully, endpoint: ${endpoint}, data: ${JSON.stringify(
                    data
                )}`;

            MixpanelLogger.log(token, message);
            httpRequest.destroy();
        } catch (error) {
            if (error.code === 400) {
                // This indicates that the data was invalid and we should not retry
                throw new MixpanelHttpError(
                    `HTTP error! status: ${error.code}`,
                    error.code
                );
            }
            MixpanelLogger.warn(
                token,
                `API request to ${url} has failed with reason: ${error.message}`
            );
            const maxRetries = 5;
            const backoff = Math.min(2**retryCount * 2000, 60000); // Exponential backoff
            if (retryCount < maxRetries) {
                MixpanelLogger.log(token, `Retrying in ${backoff / 1000} seconds...`);
                await new Promise((resolve) => setTimeout(resolve, backoff));
                return sendRequest({
                    token,
                    endpoint,
                    data,
                    serverURL,
                    useIPAddressForGeoLocation,
                    retryCount: retryCount + 1,
                });
            } else {
                MixpanelLogger.warn(token, `Max retries reached. Giving up.`);
                throw new MixpanelHttpError(
                    `HTTP error! status: ${error.code}`,
                    error.code
                );
            }
        }
    };

    return {
        sendRequest,
    };
})();
