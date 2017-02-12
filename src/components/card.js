import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const Card = (props) =>
    <View>
        {props.data}
    </View>;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,

    }
});

export default Card;

