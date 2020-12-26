import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

export default (

    <Switch>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/:user/boards">
        <Dashboard />
      </Route>
      <Route path="/b/:id/:board_name"></Route>
    </Switch>


  
)