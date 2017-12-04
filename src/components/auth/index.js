import React,{ Component }from 'react';
import { connect } from 'react-redux';
import { login }from './redux/action';
export default class Auth extends Component {
  render(){
    return <h1>This is Auth Page</h1>;
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