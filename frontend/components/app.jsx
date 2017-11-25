import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util.js';
import navContainer from './dashboard/nav_container';
import landingPage from './landing_page/landing_page';
import navbarContainer from './navbar/navbar_container';
import arcadeContainer from './arcade/arcade_container';
import botContainer from './bots/bot_container';
import REPLContainer from './repl/repl_container';

export default ()=>(
  <div>

  <ProtectedRoute path = "/" component = {navbarContainer} />
  <Switch>
    <ProtectedRoute path = "/arcade/repl/:taskId" component = {REPLContainer} />
    <ProtectedRoute exact path = "/arcade" component = {arcadeContainer} />
    <ProtectedRoute exact path = "/bots" component = {botContainer} />
    <ProtectedRoute path = "/dashboard" component = {navContainer} />
    <AuthRoute exact path="/:signup?" component = {landingPage} />
  </Switch>
</div>
);
