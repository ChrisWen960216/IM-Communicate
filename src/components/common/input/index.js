/* Created By ChrisWen
 * 17/11/13
 * Common-Component-Button
 *
*/
import React, { Component } from 'react';
import '../../../css/components/input.css';

export default class Input extends Component {
  render() {
    const { inputText, inputRef, inputName, inputType, placeholder, onInput } = this.props;
    return (
      <div className='component_input'>
        <span className='text'>{inputText}</span>
        <input className='input' ref={inputRef} name={inputName} placeholder={placeholder} onInput={onInput} type={inputType}/>
      </div>
    );
  }
}
