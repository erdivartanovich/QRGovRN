import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loading = () => 
    <ActivityIndicator
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 60,
            backgroundColor: 'silver'
        }}
        size='large'
    />;

export default Loading;
