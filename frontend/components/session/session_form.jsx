import React from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import LoginForm from './login_form';
import SignupForm from './signup_form';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: props.email
    };
  }

  componentWillReceiveProps(newprops){
    this.setState(newprops);
  }

  handleInput(type){
    return e => (
      this.setState({[type]: e.target.value})
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  typeText(bool= true){
    return (this.props.isSignup == bool)?  "Sign Up" : "Log In";
  }

  otherActionPath(){
    return (this.props.isSignup)?  "":"signup";
  }


  render(){
    return(
      <Modal show={this.props.modalOpen} onHide={this.props.closeModal}>
        <Switch>
          <Route
            path="/signup"
            render={()=><SignupForm
              action = {this.props.signup}
              email = {this.state.email}
              /> }
          />
          <Route
            path="/"
            render={()=><LoginForm action ={this.props.login} />}
          />
        </Switch>
      </Modal>
    );
  }
}

export default SessionForm;
