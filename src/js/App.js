import React, { Component } from 'react';
import logo from '../image/logo.svg';
import LogIn from '../components/sign/login.js';
import '../css/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LogIn />
      </div>
    );
  }
}

export default App;
