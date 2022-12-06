import React, { useState } from 'react';

import classes from './Login.module.css';

function EmailInput () {

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

export default EmailInput;
