import React, { Component } from 'react';
import Logo from '../../component/logo';
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio, Toast } from 'antd-mobile';
import { connect }from 'react-redux';
import { register }from '../../redux/user/action';
class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      user:'',
      password:'',
      repeatPassword:'',
      type: 'Genius' //牛人
    };
    this.linkToLogIn = this.linkToLogIn.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  linkToLogIn(){
    this.props.history.push('/login');
  }

  handleChange(key, value){
    this.setState({
      [key]: value
    });
  }

  handleRegister(){
    this.props.register(this.state);

  }

  render(){
    const RadioItem = Radio.RadioItem;
    const { type } = this.state;
    console.log(this.props);
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            {/*{this.props.user.message ? Toast.fail(`${this.props.user.message}`, 2) : null}*/}
            <InputItem onChange={(value) => {this.handleChange('user', value);}}>用户名称:</InputItem>
            <InputItem type='password' onChange={(value) => {this.handleChange('password', value);}}>输入密码:</InputItem>
            <InputItem type='password' onChange={(value) => {this.handleChange('repeatPassword', value);}}>确认密码:</InputItem>
            <RadioItem checked={type === 'Genuis'} onChange={() => {this.handleChange('type', 'Genuis');}}>牛人</RadioItem>
            <RadioItem checked={type === 'Boss'} onChange={() => {this.handleChange('type', 'Boss');}}>Boss</RadioItem>
          </List>
          <WhiteSpace />
          <Button type='primary' onClick={this.handleRegister}>注册</Button>
          <WhiteSpace />
          <Button type='primary' onClick={this.linkToLogIn}>登录</Button>
        </WingBlank>
      </div>);
  }
}

function mapStateToProps(state){
  return { user: state.user };
}
function mapDispatchToProps(dispatch, ownProps){
  return {
    register: (data) => {dispatch(register(data));}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);