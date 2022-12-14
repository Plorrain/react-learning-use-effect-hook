import React, { useState, useEffect } from 'react';

// ! Not to be used for high frequency component !
// ! Not meant to replace ALL props

const AuthContext = React.createContext({
  isLoggedIn: false,
  // line below: dummy func for better i.d.e autocompletion
  onLogout: () => {},
  onLogin: (email, password) => {},

});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.setItem('isLoggedIn', '1');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
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
