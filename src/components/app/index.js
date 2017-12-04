import React, { Component } from 'react';
import { Button } from 'antd';
import { connect }from 'react-redux';
import { addGuns,delGuns,addGunsAsync } from './redux/action';
import '../../style/App.scss';

class App extends Component {
  render() {
    const { store,addGuns,counter,addGunsAsync } = this.props;
    return (
      <div id="App">
        <header>
          <h1>IM-Communicate APP</h1>
          <h1>{counter}</h1>
          <Button type='default' onClick={addGunsAsync}>Click Me!</Button>
        </header>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    addGunsAsync: () => {dispatch(addGunsAsync());}
  };
}

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
