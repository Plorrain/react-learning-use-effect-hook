import React, { Fragment, useContext } from 'react';


import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
        <MainHeader onLogout={ctx.logoutHandler} />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
    </Fragment>
  );
}

export default App;
