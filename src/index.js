// dependencies
import React, { Component } from 'react';
import { render } from 'react-dom';

// components
import Welcome from './components/welcome.jsx';
import Login from './components/login.jsx';

// import './index.css';
import registerServiceWorker from './registerServiceWorker';

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

render(<App />, document.getElementById('root'));
registerServiceWorker();

