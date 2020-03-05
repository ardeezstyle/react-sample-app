import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Navigation from './components/navigation/Navigation'
import Employees from './employees/Employees'
import Employee from './employees/employee/Employee'
import NewEmployee from './employees/new-employee/New-employee'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Employees} />
          <Route path="/employees" exact component={Employees} />
          <Route path="/employee" exact component={Employee} />
          <Route path="/new-employee" exact component={NewEmployee} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;