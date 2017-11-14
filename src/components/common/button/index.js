/* Created By ChrisWen
 * 17/11/13
 * Common-Component-Button
 *
*/
import React from 'react';
import '../../../css/components/button.css';
const {Component} = React;
export default class Button extends Component {
  render() {
    const {props} = this;
    const {buttonText, onClick, onSubmit} = props;
    return (
      <button className='button' onClick={ onClick } submit={ onSubmit }>{buttonText}</button>
    );
  }
}
