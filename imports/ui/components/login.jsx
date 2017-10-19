import React, { Component } from 'react';

export default class Login extends Component {
	handleSignupClick () {
		console.log('signup click');
	}

	handleFacebookClick () {
		console.log('Facebook click');
	}

	handleTwitterClick () {
		console.log('twitter click');
	}
	render () {
		return (
			<article className="loginButtons">
				<button onClick={this.handleSignupClick}><i className="fa fa-hand-peace-o" aria-hidden="true"></i>Register</button>
				<p>Or</p>
				<button onClick={this.handleFacebookClick}><i className="fa fa-facebook-square" aria-hidden="true"></i>Login with Facebook</button>
				<button onClick={this.handleTwitterClick}><i className="fa fa-twitter-square" aria-hidden="true"></i>Login with Twitter</button>
				<button onClick={this.handleTwitterClick}><i className="fa fa-send" aria-hidden="true"></i>Login with good ol' fashion email</button>
			</article> 
		)
	}
}