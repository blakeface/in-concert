// dependencies
import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';

// components
import Welcome from 'components/welcome.jsx';
import Login from 'components/login.jsx';

export default class App extends Component<{}> {
	render() {
		return (
			<div>
				<Welcome />
				<Login />
			</div>
		);
	}
}
