import React, { useRef, useEffect } from 'react';

import classes from './Input.module.css';

function Input (props) {
  const inputRef = useRef();

  return (
    <div
      className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ''
        }`}
        // question: line above, why '' and not emailIsValid(event.target)?
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
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
