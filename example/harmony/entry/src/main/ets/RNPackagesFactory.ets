/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */


import type {RNPackageContext, RNPackage} from '@rnoh/react-native-openharmony/ts';
import { MixpanelPackage } from '@react-native-ohos/mixpanel-react-native/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new MixpanelPackage(ctx),
  ];
}
