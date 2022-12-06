import React, { useRef, useEffect } from 'react';

import classes from './Input.module.css';

function Input (props) {
  const inputRef = useRef();

  // useeffect hook always run in the end/after everything
  useEffect(() => {
    inputRef.current.focus();
  }, []);
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
