// dependencies
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';

// components
import Login from '../../ui/components/login.jsx';

export default class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}

Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});
