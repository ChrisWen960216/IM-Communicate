import React, { Component } from 'react';
import logo from '../image/logo.svg';
import LogOn from '../components/sign/logon.js';
import '../css/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LogOn />
      </div>
    );
  }
}

export default App;
