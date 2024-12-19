/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import { TurboModuleRegistry } from "react-native";

type MixpanelType = string | number | MixpanelProperties;
type MixpanelProperties = {[key: string]: MixpanelType};

export interface Spec extends TurboModule {
  // mixpanel api
  initialize(token: string, trackAutomaticEvents: boolean, optOutTrackingDefault: boolean, metadata: MixpanelProperties, serverURL: string): void;
  setServerURL(token:string, serverURL:string):void;
  setLoggingEnabled(token:string, loggingEnabled:boolean):void;
  setUseIpAddressForGeolocation(token:string, useIpAddressForGeolocation:boolean):void;
  setFlushBatchSize(token:string, flushBatchSize:number):void;
  hasOptedOutTracking(token:string):Promise<boolean>;
  optInTracking(token:string):void;
  optOutTracking(token:string):void;
  identify(token: string, distinctId: string): Promise<void>;
  alias(token: string, alias: string, distinctId: string): void;
  track(token: string, eventName: string, properties?: MixpanelProperties): void;
  trackWithGroups(token: string, eventName: string, properties?: MixpanelProperties,groups?: MixpanelType):void;
  setGroup(token:string,groupKey:string,groupID:MixpanelType):void;
  addGroup(token:string,groupKey:string,groupID:MixpanelType):void;
  removeGroup(token:string,groupKey:string,groupID:MixpanelType):void;
  deleteGroup(token: string, groupKey: string, groupID: MixpanelType): void;
  registerSuperProperties(token: string, properties?: MixpanelType):void;
  registerSuperPropertiesOnce(token: string, properties?: MixpanelType):void;
  unregisterSuperProperty(token: string, propertyName: string):void;
  getSuperProperties(token: string):Promise<object>;
  clearSuperProperties(token: string):void;
  timeEvent(token: string, eventName: string):void;
  eventElapsedTime(token: string, eventName: string):Promise<number>;
  reset(token:string):void;
  getDistinctId(token:string):Promise<string>;
  getDeviceId(token:string):Promise<string>;
  flush(token:string):void;
  
  // mixpanel people api
  set(token: string, properties: MixpanelProperties): void;
  setOnce(token: string, properties: MixpanelProperties): void;
  increment(token: string, add: MixpanelProperties): void;
  append(token: string, name: string, value: MixpanelType): void;
  union(token: string, name: string, value: MixpanelType): void;
  remove(token: string, name: string, value: MixpanelType): void;
  unset(token: string, name: string): void;
  trackCharge(token: string, charge: number, properties: MixpanelProperties): void;
  clearCharges(token: string): void;
  deleteUser(token: string): void;

  // mixpanel group api
  groupSetProperties(token: string, groupKey: string, groupID: string, properties: MixpanelProperties): void;
  groupSetPropertyOnce(token: string, groupKey: string, groupID: string, properties: MixpanelProperties): void;
  groupUnsetProperty(token: string, groupKey: string, groupID: string, prop: string): void;
  groupRemovePropertyValue(token: string, groupKey: string, groupID: string, name: string, value: MixpanelType): void;
  groupUnionProperty(token: string, groupKey: string, groupID: string, name: string, value: MixpanelType): void;
}

export default TurboModuleRegistry.get<Spec>("MixpanelTurboModule") as Spec | null;