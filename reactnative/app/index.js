import React, { Component } from 'react';
// native elements
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// additional elements

import Meteor from 'react-native-meteor';

const SERVER_URL = 'ws://localhost:3000/websocket';
const SERVER_IP = 'ws://73.153.148.102:3000/websocket';

class App extends Component {
  componentWillMount() {
    Meteor.connect(SERVER_URL);
  }

  render() {
    return (
     <View style={styles.container}>
         <Text h1 style={styles.header}>In:Concert</Text>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontFamily: "AMVINYL-Heavy",
  }
});

export default App;
