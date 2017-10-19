// dependencies
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';

// components
import Welcome from '../../ui/components/welcome.jsx';
import Login from '../../ui/components/login.jsx';

export default class App extends Component {
	render() {
		return (
			<div>
				<Welcome />
				<Login />
			</div>
		);
	}
}

Meteor.startup(() => {
	render(<App />, document.getElementById('root'));
});
