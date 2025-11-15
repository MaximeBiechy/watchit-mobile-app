# WatchIt

**WatchIt** is a mobile app that allows users to browse movies, create custom lists, and rate films they want to track or review later.

This project was developed as a personal learning experience during my studies, with the goal of experimenting with clean architecture, good development practices, and mobile/backend integration. It is not intended for publication or commercial use and has only been tested on Android devices.

The code is shared for demonstration purposes only and should not be reused in other projects.

---

## Mobile App

This repository contains the React Native application for WatchIt.

### Overview

WatchIt allows users to:
- Browse movies (via TMDB)
- Create personal watchlists
- Rate and track films they want to watch

The app is built with React Native and TypeScript, includes a custom Redux store, multi-language support, error tracking, and experimental AdMob integration.

The backend API for this app is available here:  
👉 https://github.com/MaximeBiechy/watchit-api

---

## Features

- Movie browsing powered by the TMDB API  
- Custom list creation and rating system  
- Redux-based global state management  
- Multi-language support (i18n)  
- Custom UI designed in Figma  
- Error monitoring via Sentry  
- Fake AdMob integration (for testing)  
- Only tested on Android

---

## Tech Stack

- **React Native (TypeScript)**
- **Redux**
- **i18n**
- **Axios**
- **Sentry**
- **AdMob (mocked)**
- **Figma (custom UI)**

---

## Design Mockups

UI mockups were designed in Figma.  
👉 *(view-only link)*  
[https://www.figma.com/design/swrq0UzbeRDJD3BiIGWw4L/Design?node-id=0-1&t=S0QfWskRmtNP6d33-1](https://www.figma.com/design/rONGYIjNkiftmUGIczmlt6/Design?node-id=1-4151&t=wPy6NkynKrYweHjH-1)

---

## Notes

⚠️ This project is not fully complete, but the core features are functional.  
It may evolve further over time, as additional features could still be developed.<br>
⚠️ The app has not been tested on iOS.<br>
⚠️ This backend was developed as a learning project.<br>  
⚠️ Code is provided for demonstration purposes only and is not intended for reuse.


# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
