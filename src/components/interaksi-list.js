import React, { Component } from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

import InteraksiDetail from './interaksi-detail';

const getDaftarInteraksi = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                id: 1,
                name: 'erdi'
            }, {
                id: 2,
                name: 'joko'
            }
        ]);
    }, 3000);
});

class InteraksiList extends Component {

    state = {
        DaftarInteraksi: []
    };

    componentWillMount() {
        getDaftarInteraksi.then((response => this.setState({ DaftarInteraksi: response })));
    }
    renderInteraksiList() {
        return (this.state.DaftarInteraksi.length > 0
            ? this.state.DaftarInteraksi.map(interaksi => 
              <InteraksiDetail key={interaksi.id} interaksi={interaksi} />)               
            : 
            <ActivityIndicator
                style={{ alignItems: 'center', justifyContent: 'center', padding: 20, height: 80 }} 
                size='large'
            />);
    }
    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderInteraksiList()}
            </View>
        );
    }
}

export default InteraksiList;

