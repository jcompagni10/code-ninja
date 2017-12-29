import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util.js';
import navContainer from './dashboard/nav_container';
import landingPage from './landing_page/landing_page';
import navbarContainer from './navbar/navbar_container';
import arcadeNavContainer from './arcade/arcade_container';
import botNavContainer from './bots/bot_container';
import botFightContainer from './modes/bots/bot_fight_container';
import arcadeContainer from './modes/arcade/arcade_container';
import challengesNavContainer from './challenges/challenges_container';
import challengesContainer from './modes/challenges/challenges_container';
import HeadToHeadNav from './head_to_head/head_to_head_container';
export default ()=>(
  <div>

  <ProtectedRoute path = "/:mode?/:repl?/:taskId?" component = {navbarContainer} />
  <Switch>
    <ProtectedRoute exact path = "/arcade" component = {arcadeNavContainer} />
    <ProtectedRoute exact path = "/challenges" component = {challengesNavContainer} />
    <ProtectedRoute exact path = "/bots" component = {botNavContainer} />
    <ProtectedRoute exact path = "/head_to_head" component = {HeadToHeadNav} />
    <ProtectedRoute path = "/bots/repl/:taskId/:botId" component = {botFightContainer} />
    <ProtectedRoute path = "/arcade/repl/:taskId" component = {arcadeContainer} />
    <ProtectedRoute path = "/challenges/repl/:taskId" component = {arcadeContainer} />
    <ProtectedRoute path = "/dashboard" component = {navContainer} />
    <AuthRoute exact path="/:signup?" component = {landingPage} />
  </Switch>
</div>
);
