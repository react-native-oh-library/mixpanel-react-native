
/**
 * This code was generated by "react-native codegen-harmony"
 *
 * Do not edit this file as changes may cause incorrect behavior and will be
 * lost once the code is regenerated.
 *
 * @generatorVersion: 1
 */
#include "MixpanelTurboModule.h"

namespace rnoh {
using namespace facebook;

MixpanelTurboModule::MixpanelTurboModule(const ArkTSTurboModule::Context ctx, const std::string name) : ArkTSTurboModule(ctx, name) {
    methodMap_ = {
        ARK_METHOD_METADATA(initialize, 5),
        ARK_METHOD_METADATA(setServerURL, 2),
        ARK_METHOD_METADATA(setLoggingEnabled, 2),
        ARK_METHOD_METADATA(setUseIpAddressForGeolocation, 2),
        ARK_METHOD_METADATA(setFlushBatchSize, 2),
        ARK_ASYNC_METHOD_METADATA(hasOptedOutTracking, 1),
        ARK_METHOD_METADATA(optInTracking, 1),
        ARK_METHOD_METADATA(optOutTracking, 1),
        ARK_ASYNC_METHOD_METADATA(identify, 2),
        ARK_METHOD_METADATA(alias, 3),
        ARK_METHOD_METADATA(track, 3),
        ARK_METHOD_METADATA(trackWithGroups, 4),
        ARK_METHOD_METADATA(setGroup, 3),
        ARK_METHOD_METADATA(addGroup, 3),
        ARK_METHOD_METADATA(removeGroup, 3),
        ARK_METHOD_METADATA(deleteGroup, 3),
        ARK_METHOD_METADATA(registerSuperProperties, 2),
        ARK_METHOD_METADATA(registerSuperPropertiesOnce, 2),
        ARK_METHOD_METADATA(unregisterSuperProperty, 2),
        ARK_ASYNC_METHOD_METADATA(getSuperProperties, 1),
        ARK_METHOD_METADATA(clearSuperProperties, 1),
        ARK_METHOD_METADATA(timeEvent, 2),
        ARK_ASYNC_METHOD_METADATA(eventElapsedTime, 2),
        ARK_METHOD_METADATA(reset, 1),
        ARK_ASYNC_METHOD_METADATA(getDistinctId, 1),
        ARK_ASYNC_METHOD_METADATA(getDeviceId, 1),
        ARK_METHOD_METADATA(flush, 1),
        ARK_METHOD_METADATA(set, 2),
        ARK_METHOD_METADATA(setOnce, 2),
        ARK_METHOD_METADATA(increment, 2),
        ARK_METHOD_METADATA(append, 3),
        ARK_METHOD_METADATA(union, 3),
        ARK_METHOD_METADATA(remove, 3),
        ARK_METHOD_METADATA(unset, 2),
        ARK_METHOD_METADATA(trackCharge, 3),
        ARK_METHOD_METADATA(clearCharges, 1),
        ARK_METHOD_METADATA(deleteUser, 1),
        ARK_METHOD_METADATA(groupSetProperties, 4),
        ARK_METHOD_METADATA(groupSetPropertyOnce, 4),
        ARK_METHOD_METADATA(groupUnsetProperty, 4),
        ARK_METHOD_METADATA(groupRemovePropertyValue, 5),
        ARK_METHOD_METADATA(groupUnionProperty, 5),
    };
}

} // namespace rnoh