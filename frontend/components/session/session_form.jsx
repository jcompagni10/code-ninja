import React from 'react';
import {Modal} from 'react-bootstrap';

class SessionForm extends React.Component{
  constructor(){
    super();
    this.state = {username: '', password: '', email: '', modalOpen: true};
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
  typeText(){
    return this.props.isLogin ? "Log In" : "Sign Up" ;
  }

  email(){
    if (!this.props.isLogin){
      return(
        <label htmlFor="email-input">Email:
            <input
              type="email"
              id = "email-input"
              onChange={this.handleInput("email")}
            />
        </label>
      );
    }
  }
  closeModal(){
    this.setState({modalOpen: false});
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  render(){
    return(
      <Modal show={this.state.modalOpen} onHide={this.closeModal.bind(this)}>
        <Modal.Header closeButton>
          <h4>{this.typeText()}</h4>
        </Modal.Header>
        <form onSubmit= {this.handleSubmit.bind(this)}>
          <label htmlFor="username-input">Username: </label>
          <input
            type="text"
            id = "username-input"
            onChange={this.handleInput("username")}
          />
        <label htmlFor="password-input">Password: </label>
          <input
            type="password"
            id = "password-input"
            onChange={this.handleInput("password")}
          />
        {this.email()}
        <input type="submit" value={this.typeText()} />
        </form>
      </Modal>
    );
  }
}

export default SessionForm;
