import React,{ Component } from 'react';
import logoImg from '../../img/logo.png';
import '../../style/logo.scss';

export default class Logo extends Component{
  render(){
    return (
      <div className='logo-container'>
        <img src={logoImg} alt="logo"/>
      </div>
    );
  }
}