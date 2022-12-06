import React from 'react';

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
