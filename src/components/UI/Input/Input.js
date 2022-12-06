import React from 'react';

import classes from './Input.module.css';

function Input (props) {
  return (
    <div
      className={`${classes.control} ${
          emailState.isValid === false ? classes.invalid : ''
        }`}
        // question: line above, why '' and not emailIsValid(event.target)?
      >
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
    </div>
  )
}

export default Input;
