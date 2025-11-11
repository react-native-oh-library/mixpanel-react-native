# Changelog

## 鸿蒙化Log

### v3.1.3-rc.1

- pre-release version 3.1.3-rc.1
- feat: add Openharmony support for mixpanel-react-native

## ReleasesLog 

### v3.1.2

- #### Fixes

  - Expo dependencies are required for non-Expo apps [#291](https://github.com/mixpanel/mixpanel-react-native/issues/291)
  - Use a react-native-get-random-values polyfill instead of expo-crypto [#294](https://github.com/mixpanel/mixpanel-react-native/pull/294)

### v3.1.1

- #### Enhancements

  - Add support for using Gzip compression [#286](https://github.com/mixpanel/mixpanel-react-native/issues/286)

- #### Fixes
  - Make expo-crypto an optional dependency [#292](https://github.com/mixpanel/mixpanel-react-native/pull/292)
  - Add useGzipCompression parameter to types declaration file [#290](https://github.com/mixpanel/mixpanel-react-native/pull/290)

### v3.1.0

- #### Enhancements

  - Use expo-crypto for UUID on Expo, expose useGzipCompression option and fix JavaScript mode People flushing issue [#288](https://github.com/mixpanel/mixpanel-react-native/pull/288)

### v3.0.9

- #### Enhancements

  - Bump native SDKs, Swift 4.4.0 and Android 8.0.3 [#285](https://github.com/mixpanel/mixpanel-react-native/pull/285)

- #### Fixes

  - fix: custom storage [#282](https://github.com/mixpanel/mixpanel-react-native/pull/282)

### v3.0.8

- #### Fixes

  - encodeURIComponent body JSON data [#277](https://github.com/mixpanel/mixpanel-react-native/pull/277)

### v3.0.7

- #### Fixes

  - Revert the minSDK to 21 [#271](https://github.com/mixpanel/mixpanel-react-native/pull/271)
  - revert android [#267](https://github.com/mixpanel/mixpanel-react-native/pull/267)https://github.com/mixpanel/mixpanel-react-native/pull/277)

### v3.0.6

- #### Enhancements

  - bump iOS to 4.3.0 and Android minSDK to 23 [#264](https://github.com/mixpanel/mixpanel-react-native/pull/264)
  - upgrade android sdk to 7.5.3 [#263](https://github.com/mixpanel/mixpanel-react-native/pull/263)

- #### Fixes

  - fix: opt in tracking issue during initialize [#257](https://github.com/mixpanel/mixpanel-react-native/pull/257)

### v3.0.5

- #### Fixes

  - fix: resolve import issue for MixpanelMain [#253](https://github.com/mixpanel/mixpanel-react-native/pull/253)