/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 *
 * https//github.com/iethem/react-native-boilerplate
 */

import 'react-native-gesture-handler';

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import { Provider } from 'react-redux';

// Import root app
import App from 'containers/App/Loadable';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

import('intl/locale-data/jsonp/en.js');
import('intl/locale-data/jsonp/tr.js');

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

global.Intl = require('intl');

const render = () => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <App />
    </LanguageProvider>
  </Provider>
);

export default render;
