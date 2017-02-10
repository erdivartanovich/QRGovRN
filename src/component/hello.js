import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { styles, panel1, panel2 } from '../styles/hello-style';

const props = {
  title: 'This is the title',
  whatToSay: 'Hello World !'
};

export default () => 
  <View>
    <View style={panel1}>
      <Text style={styles.title}> {props.title} </Text>
    </View>
    <View style={panel2}>
      <Text> {props.whatToSay} </Text>
    </View>
  </View>;

