![Editor Page Image](https://firebasestorage.googleapis.com/v0/b/dispatch-301519.appspot.com/o/Screenshot%202021-07-24%20at%2011.45.40%20PM.png?alt=media&token=83dc4b53-c6c5-4714-a996-2837b7ab0d21)

# Typoway-public

Typoway(public) is a open-source web application that allows user to create HTML Email templates and send it through the use of Gmail API. Click below to try it live.

### [public.typoway.com](https://public.typoway.com)

Built with React.js

## Features

Users will login using Gmail's OAuth 2.0 protocol which will be authenticated by Google. The token will be then used to create a new account at firebase.

After being authenticated, users will be redirected to the dashboard where they can:

- View past messages sent.
- View current templates.
- Create new templates.
- Send emails using created templates.

## Installation Guide

### Requirements

#### .env file

- All Gmail API requests require an API Key and an OAuth 2.0 Client ID. You can follow [these instructions](https://developers.google.com/fit/android/get-api-key) to obtain those credentials.

- TinyMCE API Key. This application uses TinyMCE rich text editor to allow users to make final changes to their template before sending. to get an API key, [click here](https://www.tiny.cloud/docs/quick-start/)

#### /src/utils/config.js

- A Firebase config file is also needed as this application uses Firebase Auth and Firestore. To create a Firebase project, [click here](https://firebase.google.com/docs/projects/learn-more)

### Getting started

1. Clone the Repo, and install dependencies

```bash
$ git clone https://github.com/theofficialmilo/typoway-public
$ cd  typoway-public
$ npm install
```

2. Create a `.env` from `.env.example` and add GAPI and TinyMCE API keys.

```bash
$ cp .env.example .env
```

3. Move your firebase config file to `/utils` and rename it `config`.
4. Run `$ npm start` and open it at `localhost:3000`

## Technologies used

- [React](https://github.com/facebook/react) - SPA
- [Redux](https://github.com/reduxjs/redux) and [Redux-saga](https://github.com/redux-saga/redux-saga) - State Management and Middleware
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) and [history](https://github.com/ReactTraining/history) - Dynamic Routing with History Management
- [Firebase](https://github.com/firebase/firebase-js-sdk) - Authentication and Document based database
- [Material-ui](https://github.com/mui-org/material-ui) - UI-Components, Icons, Styling
- [Lottie-react](https://github.com/LottieFiles/lottie-react) - Lottie SVG Animations
- [js-base64](https://github.com/dankogai/js-base64) - Base64 transcoder
- [DOMPurify](https://github.com/cure53/DOMPurify) - HTML sanitizer
- [react-email-editor](https://github.com/unlayer/react-email-editor) and [tinymce-react](https://github.com/tinymce/tinymce-react) - Email HTML editor and Rich-Text Editor

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
