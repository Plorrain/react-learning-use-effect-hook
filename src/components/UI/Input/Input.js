import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

function Input (props) {
  const inputRef = useRef();

  // const validate: instead of using useEffect is also
  // a solution but only in rare cases
  // most of the time state, effect etc are better
  const activate = () => {
    inputRef.current.focus();
  }

  // useEffect hook always run in the end/after the rest of the code
  // for this useEffect needs to be imported
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);


  return (
    <div
      className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ''
        }`}
        // question: line above, why '' and not emailIsValid(event.target)?
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
        ref={inputRef}
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
    </div>
  )
}

export default Input;
