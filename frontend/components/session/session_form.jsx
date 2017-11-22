import React from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';

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


  email(){
    if (this.props.isSignup){
      return(
        <div className="form-group">
            <label htmlFor="email-input">Email </label>
            <input
              type="email"
              className= "form-control"
              id = "email-input"
              onChange={this.handleInput("email")}
            />
        </div>
      );
    }
  }

  render(){
    return(
      //show=
      <Modal show={this.props.modalOpen} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <h4>{this.typeText(true)}</h4>
          {this.props.isSignup}
        </Modal.Header>
        <form
          onSubmit= {this.handleSubmit.bind(this)}
          className ="session-form" >
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="username-input">Username</label>
              <input
                type="text"
                className= "form-control"
                id = "username-input"
                onChange={this.handleInput("username")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-input">Password</label>
                <input
                  type="password"
                  className= "form-control"
                  id = "password-input"
                  onChange={this.handleInput("password")}
                />
              {this.email()}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Link
              to={`/${this.otherActionPath()}`}
              className="signup-link">{this.typeText(false)}
            </Link>
            <input
              type="submit"
              className="submit-button"
              value={this.typeText(true)} />
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default SessionForm;
