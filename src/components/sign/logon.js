/*
* * {static function} render();
* */
import React from 'react';
import { Link } from 'react-router';
import Button from '../common/button';
import Input from '../common/input';
const {Component} = React;

export default class LogOn extends Component {
  render() {
    return (
      <div>
        <Input inputText='输入名称:' inputType='text'/>
        <Input inputText='输入密码:' inputType='password'/>
        <Input inputText='确认密码:' inputType='password'/>
        <div>已有账户，<Link to='/login'>登录</Link></div>
        <Button buttonText='注册'/>
      </div>
    );
  }
}
