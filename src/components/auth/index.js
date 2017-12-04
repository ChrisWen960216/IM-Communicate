import React,{ Component }from 'react';
import { connect } from 'react-redux';
import { login, getUserData, userData }from './redux/action';
import { Button }from 'antd';
import axios from 'axios';

export default class Auth extends Component {
  constructor(props){
    super(props);
    this.getUserData = this.getUserData.bind(this);
  }
  getUserData(){
    axios.get('/').then(response => {
      if(response.status === 200){
        userData(response.data);
      }
    });
  }

  render(){
    const { getUserData } = this.props;
    return (
      <div>
        <h1>This is Auth Page</h1>
        <h2>Make Sure You have the access</h2>
        <Button type='primary' onClick={this.getUserData}>登录</Button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}
function mapDispatchToProps(dispatch, ownProps){
  return {
    userData: data => {dispatch(userData(data));}
    // login: () => {dispatch(login());},
    // getUserData: () => {dispatch(getUserData());}
  };
}

connect(mapStateToProps, mapDispatchToProps)(Auth);