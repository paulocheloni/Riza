# Riza

This is a simple app with a profile view and a post view. The first tab contains a profile view at the top of the screen and horizontal ScrollView sections that are in a vertical Flatlist. The second tab features a post view obtained from an API call.


### Gallery ### 

<div style="display:flex;">
  <img src="simulator_screenshot_2E011A7F-F600-4563-BC3D-625AD62CD455.png" style="width:30%;">
  <img src="simulator_screenshot_535E5B6D-536C-40B3-8C18-B3F94651CFA9.png" style="width:30%;">
  <img src="simulator_screenshot_6B91C6EE-1BE6-4ECA-8DE3-6150483ACEA4.png" style="width:30%;">

</div>

## Requirements

Node.js

Yarn (ou NPM)

Expo CLI
  
 
## How to run the project
To run this project, you need to follow these steps:

Install Node.js on your computer from the official website: https://nodejs.org/

Install the Yarn package manager (you can also use NPM, which comes with Node.js, if you prefer) by running the following command:

```bash
  npm install --global yarn 
```
Install the Expo CLI globally using Yarn (or NPM):
```bash
   yarn global add expo-cli
```
Clone this repository to your computer:
```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
```
Navigate to the cloned project folder and install the dependencies:
```bash
   cd Riza
   yarn install
```
Start the Expo development server:
```bash
   npx expo start
```
Expo will open a new window in your browser with a QR code. To view the app on your mobile device, install the Expo Go app, which is available on the App Store (iOS) or the Google Play Store (Android). Once you have installed the app, open it and scan the QR code using your phone's camera or the scanning function within the Expo Go app. This will launch the app on your mobile device, allowing you to view and test its features.

The app will be loaded on your device and you can view and test its features. Once the app is launched on your device, you can interact with it just like any other app on your phone. You can navigate through the different screens, test out the functionality of the app, and explore its features. If you encounter any issues while using the app, you can check the terminal where you started the Expo development server for any error messages that may help you troubleshoot the problem.


## Folders

1. `node_modules`: This folder contains all the third-party modules that the project depends on. It is generated when you run `npm install` command to install the project dependencies.

2. `src`: This folder contains the source code of the React Native application. It includes the following subfolders:

    a. `components`: This folder contains reusable UI components that are used across multiple screens. The files have the extension `.tsx`.

    b. `screens`: This folder contains the different screens of the application. Each screen is represented by a separate file, which contains the code for rendering the UI elements and handling user interactions. The files have the extension `.tsx`.

    c. `store`: This folder contains the `unstated-next` store used to manage the application's state. The files have the extension `.ts`.

    d. `assets`: This folder contains static assets such as images, fonts, and icons used in the application.

    e. `styles`: This folder contains the global styles used throughout the application. The files have the extension `.ts`.

3. `index.ts`: This file is the entry point of the application. It imports the App component from the src folder and renders it to the screen.

4. `package.json`: This file contains the project's metadata, including the project name, version, dependencies, and scripts.

5. `App.tsx`: This file contains the root component of the application. It sets up the `unstated-next` store and initializes the navigation. The file has the extension `.tsx`.

## Tests

Although the test suite located in the assets folder may not provide complete code coverage, it remains a valuable tool for ensuring the overall quality of the codebase. These tests offer a broad coverage of the code, allowing for the identification of potential errors and issues during runtime.

While achieving full code coverage can be difficult or impossible in certain cases, a comprehensive coverage of the codebase still provides significant value in terms of improving code quality. This is particularly relevant to the components folder, where the test suite can verify the accuracy and functionality of the assets used in the project.

In conclusion, while striving for complete code coverage is a noble objective, it is not always practical or achievable. Nonetheless, the test suite in the assets folder serves as a valuable resource for maintaining codebase quality and identifying potential issues that may occur during runtime.



## Developer

- [@paulocheloni](https://github.com/paulocheloni)



