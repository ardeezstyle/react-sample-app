import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Users from './components/users/Users';
import Admins from './components/admins/Admins';
import roleutils from './utils';

function App() {
    console.log(roleutils.getRole());
    return (
      <BrowserRouter>
        <button onClick={() => roleutils.setRole('Admin')}>Admin</button>
        <button onClick={() => roleutils.setRole('User')}>User</button>
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={props => {
                if(roleutils.getRole() === 'Admin')
                  return <Admins />
                else
                  return <Users />
            }}
          />

          <Redirect from="/" to="/dashboard" />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
