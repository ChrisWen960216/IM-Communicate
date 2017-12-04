/** Created By ChrisWen
 *  17/12/04
 *  LogIn Page
 */
import React,{ Component } from 'react';
import Logo from '../../component/logo';
import { List, InputItem, WingBlank, WhiteSpace,Button } from 'antd-mobile';

export default class LogIn extends Component{
  constructor(props){
    super(props);
    this.linkToRegister = this.linkToRegister.bind(this);
  }
  linkToRegister(){
    this.props.history.push('/register');
  }
  render(){
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem>用户:</InputItem>
            <InputItem>密码:</InputItem>
          </List>
          <WhiteSpace />
          <Button type='primary'>登录</Button>
          <WhiteSpace />
          <Button type='primary' onClick={this.linkToRegister}>注册</Button>
        </WingBlank>
      </div>);
  }
}