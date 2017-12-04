import React,{ Component }from 'react';
import { connect } from 'react-redux';
import { login }from './redux/action';
export default class Auth extends Component {
  render(){
    return (
      <div>
        <h1>This is Auth Page</h1>
        <h2>Make Sure You have the access</h2>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    auth: state
  };
}
function mapDispatchToProps(dispatch, ownProps){
  return {
    login: () => {dispatch(login());}
  };
}

connect(mapStateToProps, mapDispatchToProps)(Auth);