import React from 'react';

import {
  AppRegistry,
} from 'react-native';

import Hello from './src/component/hello';

const App = () =>
  <Hello />;

AppRegistry.registerComponent('QRGovRN', () => App);
