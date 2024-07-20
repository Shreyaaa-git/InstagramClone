# Instagram Clone

A simple Instagram clone made with React Native and Expo.

## Overview

This project is a basic implementation of an Instagram-like app using React Native and Expo. It includes three main pages: Login/Sign Up, Homepage, and Profile Page. Each page mimics basic features found in Instagram, such as viewing posts, stories, and user profiles.

## Pages

### 1. Login/Sign Up Page

- **Functionality:**
  - Simple front-end for login and sign-up.
  - No verification or JWT/cache functionality.
  - Allows login by entering a username and clicking the login button.

### 2. Homepage

- **Sections:**
  - **Top Story Section:**
    - Displays dummy profiles.
    - Supports horizontal scrolling.
  - **Posts Section:**
    - Displays dummy posts from users.
    - Supports vertical scrolling.
  - **Profile Suggestions Section:**
    - Displays profile suggestions.
    - Supports vertical scrolling.
  - **Profile Icon:**
    - Displays a profile icon at the bottom of the page.
    - Adds click functionality to navigate to the profile page.

### 3. Profile Page

- **Sections:**
  - **Top Section:**
    - Displays the profile picture, followers, and following count.
  - **Second Section:**
    - Shows the number of posts.
  - **Third Section:**
    - Displays posts in a stacked card format.
    - Supports horizontal scrolling to view posts (latest on the left, older on the right).

## Installation

Follow these steps to set up the project locally:

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/InstagramClone.git
   cd InstagramClone
   ```

2. Install dependencies
   ```sh
   npm install
   ```

3. Start the app
   ```sh
   expo start
   ```

## Usage

- **Login:**
  - Enter a username and click the login button to proceed to the homepage.
- **Homepage:**
  - View stories, posts, and profile suggestions by scrolling.
  - Click the profile icon to navigate to the profile page.
- **Profile Page:**
  - View the user's profile picture, followers, following count, and posts.

## Screenshots

### Login Page

![LoginPage](https://github.com/user-attachments/assets/8127c02e-5926-4cd0-8643-aea2139b25fe)


_Description: The login page where users can enter their username and login._

### Homepage

![HomePage](https://github.com/user-attachments/assets/e5aab454-edc5-4c55-ad7f-f7a68e4ed9b8)


_Description: The homepage displaying stories, posts, and profile suggestions._

### Profile Page

![ProfilePage](https://github.com/user-attachments/assets/cfb32025-dd0c-435f-93f7-32549e1f6586)


_Description: The profile page showing the user's profile picture, followers, following count, and posts._

---

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
