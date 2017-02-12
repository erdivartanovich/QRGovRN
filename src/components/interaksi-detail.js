import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const InteraksiDetail = (props) => 
    <View>
        <Text> {props.interaksi.name} </Text>
    </View>;

export default InteraksiDetail;

