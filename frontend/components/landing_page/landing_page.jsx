import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import merge from 'lodash/merge';

class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      user : {
        username: "",
        password: "",
        email: ""
      }
    };

    this.openModal = this.openModal.bind(this);
  }


  handleEmail(e){
    let email = e.target.value;
    let newState = merge(this.state.user, {email});
    this.setState(newState);
  }
  openModal(path="/"){
    this.props.history.push(path);
    this.setState({modalOpen: true});
  }

  closeModal(){
    this.setState({modalOpen: false});
    this.props.history.push("/");
  }

  loginDemoUser(){
    const user = {username: "demo_user", password: "pass123"};
    this.setState({user: user});
    this.setState({modalOpen: true});
    setTimeout(function () {
      $("input[type='submit']").click();
    }, 500);
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
                <li className="sq-button pointer" onClick = {this.openModal}>
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
            <div className="top-spacer visible-xs"></div>
            <div className="col-sm-5 signup-box">
              <button className="btn btn-primary fb-signup"
                onClick={this.loginDemoUser.bind(this)}>
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
                  value={this.state.user.email}
                  placeholder= "Email"
                />
                <button
                  className="sign-up-btn"
                  onClick={()=>this.openModal("signup")}>
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
          user = {this.state.user}
          closeModal = {this.closeModal.bind(this)}
        />
      </div>
    );
  }
}

export default LandingPage;
