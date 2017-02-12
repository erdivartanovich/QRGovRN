import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const InteraksiDetail = (props) => 
    <View style={{ paddingLeft: 16 }}>
        <View style={{ marginTop: 16 }}>
            <Text style={{ fontSize: 16 }} > {props.interaksi.name} </Text>
        </View>
    </View>;

export default InteraksiDetail;

