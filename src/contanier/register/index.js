import React,{ Component } from 'react';
import Logo from '../../component/logo';
import { List, InputItem, WingBlank, WhiteSpace,Button,Radio } from 'antd-mobile';

export default class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      type: 'Genius' //牛人
    };
    this.linkToLogIn = this.linkToLogIn.bind(this);
  }

  linkToLogIn(){
    this.props.history.push('/login');
  }

  render(){
    const RadioItem = Radio.RadioItem;
    const { type } = this.state;
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem>用户名称:</InputItem>
            <InputItem>输入密码:</InputItem>
            <InputItem>确认密码:</InputItem>
            <RadioItem checked={type === 'Genuis'}>牛人</RadioItem>
            <RadioItem checked={type === 'Boss'}>Boss</RadioItem>
          </List>
          <WhiteSpace />
          <Button type='primary'>注册</Button>
          <WhiteSpace />
          <Button type='primary' onClick={this.linkToLogIn}>登录</Button>
        </WingBlank>
      </div>);
  }
}