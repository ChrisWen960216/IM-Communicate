/* Created By ChrisWen
 * 17/11/13
 * Common-Component-Button
 *
*/
import React, { Component } from 'react';
import '../../../css/components/button.css';

export default class Button extends Component {
  render() {
    const {buttonText, onClick, onSubmit} = this.props;
    return (
      <button className='button' onClick={ onClick } submit={ onSubmit }>{buttonText}</button>
    );
  }
}
