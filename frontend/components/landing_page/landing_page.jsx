import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';

class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      email: '',
    };

    this.openModal = this.openModal.bind(this);
  }


  handleEmail(e){
    this.setState({email: e.target.value});
  }
  openModal(){
    this.setState({modalOpen: true});
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  render(){
    return (
      <div className="landing-page row">
        <header className="landing-header col-xs-12">
          <div className="row">
            <div className="left-content col-xs-6">
              <img src ="assets/logo-badge.svg" className="logo"/>
            </div>
            <div className="col-xs-6">
              <ul className="header-links pull-right hidden-xs">
                <li>blog</li>
                <li>companies</li>
                <li className="sq-button" onClick = {this.openModal}>
                  Log in
                </li>
              </ul>
            </div>
          </div>
        </header>
        <img src="assets/yellow-top.svg" className="top particles"/>
        <section className="main-landing-content">
          <div className="row inner-landing-content">
            <div className="col-sm-5 col-sm-offset-1 top-spacer">
              <h2 className="landing-tagline">Practice <span className="bold">Programming!</span></h2>
              <p className="landing-info top-spacer">
                CodeFights is the most fun way to practice your programming skills.
                Master new languages, prepare for interviews, and much more!
                Join an active community of <span className="bold">500,000+</span> engineers!
              </p>
            </div>
            <div class="top-spacer visible-xs"></div>
            <div className="col-sm-5 signup-box">
              <button className="btn btn-primary fb-signup">
                Sign in with demo account
              </button>
              <div className ="or-line">
                <div className="inner-or">or</div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className= "form-control"
                  onChange={this.handleEmail.bind(this)}
                  value={this.state.email}
                  placeholder= "Email"
                />
                <button
                  className="sign-up-btn"
                  onClick={this.openModal}>
                  sign up free
                </button>
              </div>
            </div>
          </div>
        </section>
        <img src="assets/yellow-bottom.svg" className="bottom particles"/>

        <SessionFormContainer
          isSignup = {this.state.isSignup}
          modalOpen = {this.state.modalOpen}
          email = {this.state.email}
          closeModal = {this.closeModal.bind(this)}
        />
      </div>
    );
  }
}

export default LandingPage;
