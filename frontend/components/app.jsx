import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util.js';
import navContainer from './dashboard/nav_container';
import landingPage from './landing_page/landing_page';
import navbarContainer from './navbar/navbar_container';
import arcadeNavContainer from './arcade/arcade_container';
import botContainer from './bots/bot_container';
import botFightContainer from './modes/bots/bot_fight_container';
import arcadeContainer from './modes/arcade/arcade_container';
import challengeNavContainer from './modes/challenges/challenge_nav_container';

export default ()=>(
  <div>

  <ProtectedRoute path = "/:mode?/:repl?/:taskId?" component = {navbarContainer} />
  <Switch>
    <ProtectedRoute path = "/bots/repl/:taskId/:botId" component = {botFightContainer} />
    <ProtectedRoute path = "/arcade/repl/:taskId" component = {arcadeContainer} />
    <ProtectedRoute exact path = "/arcade" component = {arcadeNavContainer} />
    <ProtectedRoute exact path = "/challenges" component = {challengeNavContainer} />
    <ProtectedRoute exact path = "/bots" component = {botContainer} />
    <ProtectedRoute path = "/dashboard" component = {navContainer} />
    <AuthRoute exact path="/:signup?" component = {landingPage} />
  </Switch>
</div>
);
