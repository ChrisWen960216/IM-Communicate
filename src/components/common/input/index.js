/* Created By ChrisWen
 * 17/11/13
 * Common-Component-Button
 *
*/
import React from 'react';
import '../../../css/components/input.css';
const {Component} = React;
export default class Input extends Component {
  render() {
    const {props} = this;
    const { inputText, inputRef, inputName, inputType, placeholder, onInput } = props;
    return (
      <div className='component_input'>
        <span className='text'>{inputText}</span>
        <input className='input' ref={inputRef} name={inputName} placeholder={placeholder} onInput={onInput} type={inputType}/>
      </div>
    );
  }
}
