# @abelflopes/react-native-template

This is a plug and play template for react native apps.

Just run `npm i` & `npm start` start coding!

## Features of this template

- **Apple Authentication**
 - Use google could to provide a consent screen and to manage OAuth credentials for web, iOS and Android
- **Apple Authentication**
  - [Docs](https://docs.expo.dev/versions/latest/sdk/apple-authentication/)
  - [Implementation](./src//features/auth/index.tsx)
- **Easy Debugging**
  - press `shift` + `m` after running `npm start`(but before opening in a device)  so that it opens devtools app when opening element inspector on Expo developer menu.
  - press `j` after running `npm start` to get console output on a chrome devtools window
  - [Docs](https://reactnative.dev/docs/react-devtools)

## Official Documentation 

- [React Native](https://reactnative.dev/docs)
- [Expo](https://docs.expo.dev/)

## Official libraries

- [React Native Components](https://reactnative.dev/docs/components-and-apis)
- [React Native API's](https://reactnative.dev/docs/accessibilityinfo)
- [Expo SDK](https://docs.expo.dev/versions/latest/sdk)

## Setting up google auth

https://www.youtube.com/watch?v=BDeKTPQzvR4&ab_channel=CodewithBeto

### Bundle Identifier

Run `npm exec -- expo prebuild` to extend configuration with bundle identifiers

# Credentials

```bash
npm install -g eas-cli
eas credentials
```

## Building

Testing auth, using a real build

https://docs.expo.dev/build-reference/apk/

`eas build -p android --profile preview`

https://docs.expo.dev/build-reference/simulators/

`eas build -p ios --profile preview`