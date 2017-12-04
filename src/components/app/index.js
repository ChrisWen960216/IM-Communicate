import React, { Component } from 'react';
import { Button } from 'antd';
import { connect }from 'react-redux';
import { addGuns,delGuns } from './redux/action';
import '../../style/App.scss';

class App extends Component {
  render() {
    const { store,addGuns,num } = this.props;
    return (
      <div id="App">
        <header>
          <h1>IM-Communicate APP</h1>
          <h1>{num}</h1>
          <Button type='default' onClick={addGuns}>Click Me!</Button>
        </header>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    num: state
  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    addGuns: () => {dispatch(addGuns());}
  };
}

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
