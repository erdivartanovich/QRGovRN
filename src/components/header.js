//the header component
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

//import the styles module
import { global, header } from '../styles/styles';

//initial props
const props = {
  title: 'QRIP',
};

//define the header panel style merged with global panel style
const headerPanel = [global.panel, header.panel]; 

//render the header component
const Header = () => 
    <View style={headerPanel}>
      <Text style={header.title}> {props.title} </Text>
    </View>;

export default Header;
