import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  // line below: dummy func for better i.d.e autocompletion
  onLogout: () => {},
  onLogin: (email, password) => {},

});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
