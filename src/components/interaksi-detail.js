import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Card from './card';
import CardSection from './card-section';

const InteraksiDetail = (props) => 
    <Card style={{ paddingLeft: 16 }}>
        <CardSection style={styles.headerSection}>
            <View></View>
            <View style={styles.headerSection}>
                <Text style={{ fontSize: 16 }} > {props.interaksi.id} </Text>
                <Text style={{ fontSize: 16 }} > {props.interaksi.name} </Text>
            </View>
        </CardSection>
    </Card>;

const styles = StyleSheet.create({
   headerSection: { 
       flexDirection: 'column',
       justifyContent: 'space-around',    
   } 
});

export default InteraksiDetail;

