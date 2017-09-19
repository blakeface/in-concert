import React, { Component } from 'react';
import EmailLogin from './logins/email.jsx';

export default class Login extends Component {
  constructor(){
    super()
    state = {
      emailModalVis: false,
    };
  }

  handleEmailClick () {
    this.setState((prevState) => {
      return {emailModalVis: !prevState}
    })
  }

  handleFacebookClick () {
    console.log('Facebook click');
  }

  handleTwitterClick () {
    console.log('twitter click');
  }

  render () {
    return (
      <main className="lp">
        <div className="headerwrap">
          <h1>In:Concert</h1>
        </div>

        <div>
          <button onClick={this.handleEmailClick}><i className="fa fa-envelope-o" aria-hidden="true"></i>Signup with Email</button>
          <button onClick={this.handleFacebookClick}><i className="fa fa-facebook-square" aria-hidden="true"></i>Signup with Facebook</button>
          <button onClick={this.handleTwitterClick}><i className="fa fa-twitter-square" aria-hidden="true"></i>Signup with Twitter</button>
        </div>
        { this.state.emailModalVis ? <EmailLogin /> : null }

      </main>
    )
  }
}
