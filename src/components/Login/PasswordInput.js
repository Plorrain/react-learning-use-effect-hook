import React from 'react';

function PasswordInput () {

  return (
    <div
      className={`${classes.control} ${
        passwordState.isValid === false ? classes.invalid : ''
      }`}
      // question: line above, why '' and not passwordIsValid(event.target)?
    >
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={passwordState.value}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
      />
    </div>
  )
}

export default PasswordInput;
