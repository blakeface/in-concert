import React, { Component } from 'react';

export default class LandingPage extends Component {
  constructor(){
    super()
    state = {
      emailModalVis: false,
    }
  }

  handleEmailClick () {
    this.setState((prevState) => {
      return {emailModalVis: !prevState}
    })
  }

  handleFacebookClick () {
    console.log('click')
  }

  handleTwitterClick () {
    console.log('click')
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

        <div id="modal-email" className="modalbox-modal">
          <div className="modalbox-modal-content">
            <form>
              <label for="username">Username</label>
              <input type="text" id="username" name="username" />
              <label for="email">Email</label>
              <input type="text" id="email" name="email" />
              <label for="password">Password</label>
              <input type="text" id="password" name="password" />
            </form>
          </div>
        </div>
      </main>
    )
  }
}
