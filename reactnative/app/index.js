import React, { Component } from 'react';
// native elements
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// additional elements
import {
  SocialIcon
} from 'react-native-elements';

import Meteor from 'react-native-meteor';

const SERVER_URL = 'ws://localhost:3000/websocket';
const SERVER_IP = 'ws://73.153.148.102:3000/websocket';

class App extends Component {
  componentWillMount() {
    Meteor.connect(SERVER_URL);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    console.log('yo')
  }

  render() {
    return (
     <View style={styles.container}>
         <Text style={styles.header}>In:Concert</Text>
         <SocialIcon button title='Sign in with Facebook'
                     type='facebook'
                     onPress={this.handlePress}
                     style={styles.button}
           />
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
    fontSize: 50,
  },
  button: {
    padding: 12,
  },
});

export default App;
