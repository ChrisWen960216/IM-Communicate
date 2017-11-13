import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Button from '../common/button';
export default class LogIn extends Component {
  render() {
    return (
      <div>
        <input/>
        <input/>
        <input/>
        <Button buttonText='注册'/>
      </div>);
  }
}
