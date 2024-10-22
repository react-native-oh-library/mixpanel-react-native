import { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { TM } from "@rnoh/react-native-openharmony/generated/ts";
import MixpanelMain from './mixpanelJs/mixpanel-main';

export type MixpanelType = string | number | MixpanelProperties;

export type MixpanelProperties = { [key: string]: MixpanelType };

export class MixpanelModule extends TurboModule implements TM.MixpanelTurboModule.Spec {
  private mPanelImpl: MixpanelMain;

  constructor(ctx) {
    super(ctx);
  }

  // Mixpanel api
  public initialize(token: string, trackAutomaticEvents: boolean, optOutTrackingDefault: boolean,
    metadata: MixpanelProperties, serverURL: string): void {
    this.mPanelImpl = new MixpanelMain(token);
    this.mPanelImpl.initialize(token, trackAutomaticEvents, optOutTrackingDefault, metadata, serverURL);
  }

  public setServerURL(token: string, serverURL: string): void {
    this.mPanelImpl.setServerURL(token, serverURL);
  }

  public setLoggingEnabled(token: string, loggingEnabled: boolean): void {
    this.mPanelImpl.setLoggingEnabled(token, loggingEnabled);
  }

  public setUseIpAddressForGeolocation(token: string, useIpAddressForGeolocation: boolean): void {
    this.mPanelImpl.setUseIpAddressForGeolocation(token, useIpAddressForGeolocation);
  }

  public setFlushBatchSize(token: string, flushBatchSize: number): void {
    this.mPanelImpl.setFlushBatchSize(token, flushBatchSize);
  }

  public hasOptedOutTracking(token: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(this.mPanelImpl.hasOptedOutTracking(token));
    })
  }

  public optInTracking(token: string): void {
    if (!this.mPanelImpl.hasOptedOutTracking(token)) {
      console.log("[Mixpanel] The user has selected the tracing task. This operation is terminated.");
      return;
    }
    this.mPanelImpl.optInTracking(token);
    this.mPanelImpl.core.startProcessingQueue(token);
  }

  public optOutTracking(token: string): void {
    this.mPanelImpl.optOutTracking(token);
  }

  public identify(token: string, distinctId: string): Promise<void> {
    return this.mPanelImpl.identify(token, distinctId);
  }

  public alias(token: string, alias: string, original: string): void {
    this.mPanelImpl.alias(token, alias, original);
  }

  public track(token: string, eventName: string, properties?: MixpanelProperties): void {
    this.mPanelImpl.track(token, eventName, properties);
  }

  public trackWithGroups(token: string, eventName: string, properties: MixpanelProperties, groups: MixpanelProperties): void {
    this.mPanelImpl.trackWithGroups(token, eventName, properties, groups);
  }

  public setGroup(token: string, groupKey: string, groupID: MixpanelType): void {
    this.mPanelImpl.setGroup(token, groupKey, groupID);
  }

  public addGroup(token: string, groupKey: string, groupID: MixpanelType): void {
    this.mPanelImpl.addGroup(token, groupKey, groupID);
  }

  public removeGroup(token: string, groupKey: string, groupID: MixpanelType): void {
    this.mPanelImpl.removeGroup(token, groupKey, groupID);
  }

  public deleteGroup(token: string, groupKey: string, groupID: MixpanelType): void {
    this.mPanelImpl.deleteGroup(token, groupKey, groupID);
  }

  public registerSuperProperties(token: string, properties: MixpanelType): void {
    this.mPanelImpl.registerSuperProperties(token, properties);
  }

  public registerSuperPropertiesOnce(token: string, properties: MixpanelType): void {
    this.mPanelImpl.registerSuperPropertiesOnce(token, properties);
  }

  public unregisterSuperProperty(token: string, propertyName: string): void {
    this.mPanelImpl.unregisterSuperProperty(token, propertyName);
  }

  public getSuperProperties(token: string): Promise<unknown> {
    return this.mPanelImpl.getSuperProperties(token);
  }

  public clearSuperProperties(token: string): void {
    this.mPanelImpl.clearSuperProperties(token);
  }

  public timeEvent(token: string, eventName: string): void {
    this.mPanelImpl.timeEvent(token, eventName);
  }

  public eventElapsedTime(token: string, eventName: string): Promise<number> {
    return this.mPanelImpl.eventElapsedTime(token, eventName);
  }

  public reset(token: string): void {
    this.mPanelImpl.reset(token);
  }

  public getDistinctId(token: string): Promise<string> {
    return this.mPanelImpl.getDistinctId(token);
  }

  public getDeviceId(token: string): Promise<string> {
    return this.mPanelImpl.getDeviceId(token);
  }

  public flush(token: string): void {
    this.mPanelImpl.flush(token);
  }

  // people api
  public set(token: string, properties: MixpanelProperties): void {
    this.mPanelImpl.set(token, properties);
  }

  public setOnce(token: string, properties: MixpanelProperties): void {
    this.mPanelImpl.setOnce(token, properties);
  }

  public increment(token: string, properties: MixpanelProperties): void {
    this.mPanelImpl.increment(token, properties);
  }

  public append(token: string, name: string, value: MixpanelType): void {
    this.mPanelImpl.append(token, name, value);
  }

  public union(token: string, name: string, value: MixpanelType): void {
    this.mPanelImpl.union(token, name, value);
  }

  public remove(token: string, name: string, value: MixpanelType): void {
    this.mPanelImpl.remove(token, name, value);
  }

  public unset(token: string, name: string): void {
    this.mPanelImpl.unset(token, name);
  }

  public trackCharge(token: string, charge: number, properties: MixpanelProperties): void {
    this.mPanelImpl.trackCharge(token, charge, properties);
  }

  public clearCharges(token: string): void {
    this.mPanelImpl.clearCharges(token);
  }

  public deleteUser(token: string): void {
    this.mPanelImpl.deleteUser(token);
  }

  // groups api
  public groupSetProperties(token: string, groupKey: string, groupId: string, properties: MixpanelProperties): void {
    this.mPanelImpl.groupSetProperties(token, groupKey, groupId, properties);
  }

  public groupSetPropertyOnce(token: string, groupKey: string, groupId: string, properties: MixpanelProperties): void {
    this.mPanelImpl.groupSetPropertyOnce(token, groupKey, groupId, properties);
  }

  public groupUnsetProperty(token: string, groupKey: string, groupId: string, name: string): void {
    this.mPanelImpl.groupUnsetProperty(token, groupKey, groupId, name);
  }

  public groupRemovePropertyValue(token: string, groupKey: string, groupId: string, name: string, value: MixpanelType): void {
    this.mPanelImpl.groupRemovePropertyValue(token, groupKey, groupId, name, value);
  }

  public groupUnionProperty(token: string, groupKey: string, groupId: string, name: string, value: MixpanelType): void {
    this.mPanelImpl.groupUnionProperty(token, groupKey, groupId, name, value);
  }
}