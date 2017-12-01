import React, { Component } from 'react';
import {Button} from 'antd';
import '../style/App.scss';

class App extends Component {
  render() {
    return (
      <div id="App">
        <header>
          <h1>IM-Communicate APP</h1>
          <Button type='default'>Click Me!</Button>
        </header>
      </div>
    );
  }
}

export default App;
