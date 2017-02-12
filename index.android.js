import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Dashboard from './src/components/dashboard';
import Header from './src/components/header';


const App = () =>
  <View style={{ flex: 1 }}>
    <Header />
    <Dashboard />
  </View>;

AppRegistry.registerComponent('QRGovRN', () => App);
