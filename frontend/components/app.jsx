import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util.js';
import navContainer from './dashboard/nav_container';
import landingPage from './landing_page/landing_page';
import navbarContainer from './navbar/navbar_container';

export default ()=>(
  <div>

  <ProtectedRoute path = "/" component = {navbarContainer} />
  <Switch>
    <ProtectedRoute path = "/dashboard" component = {navContainer} />
    <AuthRoute exact path="/:signup?" component = {landingPage} />
  </Switch>
</div>
);
