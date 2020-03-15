import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import AppCss from './App.module.css';
import Navigation from './components/navigation/Navigation'
import Employees from './employees/Employees'
import Employee from './employees/employee/Employee'
import NewEmployee from './employees/new-employee/New-employee'

import Sample from './sample-css-module/Sample';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Navigation/>
        <div className={AppCss.heading}>Heading in App</div>
        <Sample></Sample>
        <Switch>
          <Route path="/employees" exact component={Employees} />
          <Route path="/employee/:id" exact component={Employee} />
          <Route path="/new-employee" exact component={NewEmployee} />
          <Route exact path="/" render={() => (<Redirect to="/employees" />)} />
        </Switch>
      </div>


    </BrowserRouter>
  );
}

export default App;
