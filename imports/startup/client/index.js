// dependencies
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';

// components
import LandingPage from '../../ui/components/landingpage.jsx';

export default class App extends Component {
  render() {
    return (
      <LandingPage />
    );
  }
}

Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});
