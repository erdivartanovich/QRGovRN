import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import InteraksiDetail from './interaksi-detail';
import Loading from './loading-indicator';

const getListInteraksi = new Promise((resolve) => {
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
        ListInteraksi: []
    };

    componentWillMount() {
        getListInteraksi.then((response => this.setState({ ListInteraksi: response })));
    }
    renderInteraksiList() {
        return (this.state.ListInteraksi.length > 0
            //if data not empty display the data
            ? this.state.ListInteraksi.map(interaksi => 
              <InteraksiDetail key={interaksi.id} interaksi={interaksi} />)               
            : 
            <Loading />
        );            
    }
    render() {
        console.log(this.state);
        return (
            <View style={{ flex: 1 }}>
                {this.renderInteraksiList()}
            </View>
        );
    }
}

export default InteraksiList;

