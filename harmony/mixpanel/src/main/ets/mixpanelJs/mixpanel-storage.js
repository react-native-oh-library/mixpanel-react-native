/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { MixpanelLogger } from "./mixpanel-logger";

export class AsyncStorageAdapter {
    constructor(storage) {
        if (!storage) {
            try {
                this.storage = require("@react-native-async-storage/async-storage");
            } catch {
                console.error(
                    "[@RNC/AsyncStorage]: NativeModule: AsyncStorage is null. Please run 'npm install @react-native-async-storage/async-storage' or follow the Mixpanel guide to set up your own Storage class."
                );
                console.error("[Mixpanel] Falling back to in-memory storage");
                this.storage = new InMemoryStorage();
            }
        } else {
            this.storage = storage;
        }
    }

    async getItem(key) {
        try {
            return await this.storage.getItem(key);
        } catch {
            MixpanelLogger.error("error getting item from storage");
            return null;
        }
    }

    async setItem(key, value) {
        try {
            await this.storage.setItem(key, value);
        } catch {
            MixpanelLogger.error("error setting item in storage");
        }
    }

    async removeItem(key) {
        try {
            await this.storage.removeItem(key);
        } catch {
            MixpanelLogger.error("error removing item from storage");
        }
    }
}

class InMemoryStorage {
    constructor() {
        this.store = {};
    }

    async getItem(key) {
        return this.store.hasOwnProperty(key) ? this.store[key] : null;
    }

    async setItem(key, value) {
        this.store[key] = value;
    }

    async removeItem(key) {
        delete this.store[key];
    }
}
