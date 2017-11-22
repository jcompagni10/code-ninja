import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
export default ({isLogin})=>(
  <div className="landing-page">
    <header className="landing-header">
      <div className="left-content">
        <img src ="assets/logo-badge.svg" className="logo"/>
      </div>
      <ul className="header-links">
        <li>blog</li>
        <li>companies</li>
        <li className="sq-button"><Link to="/signup">log in</Link></li>
      </ul>
    </header>
    <section className="main-landing-content">
      <img src="assets/yellow-top.svg" className="top particles"/>
      <img src="assets/yellow-bottom.svg" className="bottom particles"/>
    </section>



  <SessionFormContainer isLogin />

  </div>
);
