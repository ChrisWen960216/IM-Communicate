/** Created By ChrisWen
 *  17/12/04
 *  LogIn Page
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../../component/logo';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/user/action';

class LogIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      password: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.linkToRegister = this.linkToRegister.bind(this);
  }
  handleChange (key, value) {
    this.setState({
      [key]: value
    });
  }
  handleLogin () {
    this.props.login(this.state);
  }
  linkToRegister () {
    this.props.history.push('/register');
  }
  render () {
    return (
      <div>
        {(this.props.user.redirectTo && this.props.user.redirectTo!== '/login') ? <Redirect to={this.props.user.redirectTo}/>:null}
        <Logo />
        <WingBlank>
          <List>
            <InputItem  onChange={(value) => {this.handleChange('user', value);}}>用户:</InputItem>
            <InputItem type='password' onChange={(value) => {this.handleChange('password', value);}}>密码:</InputItem>
          </List>
          <WhiteSpace />
          <Button type='primary' onClick={this.handleLogin}>登录</Button>
          <WhiteSpace />
          <Button type='primary' onClick={this.linkToRegister}>注册</Button>
        </WingBlank>
      </div>);
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  };
}
function mapDispatchToProps (dispatch, ownProps) {
  return {
    login: data => {dispatch(login(data));}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);