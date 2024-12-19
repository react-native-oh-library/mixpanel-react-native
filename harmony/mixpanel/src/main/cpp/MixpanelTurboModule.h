/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */
 
#pragma once

#include "RNOH/ArkTSTurboModule.h"

namespace rnoh {

class JSI_EXPORT MixpanelTurboModule : public ArkTSTurboModule {
  public:
    MixpanelTurboModule(const ArkTSTurboModule::Context ctx, const std::string name);
};

} // namespace rnoh
