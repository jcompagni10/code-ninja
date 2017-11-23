import React from 'react';
import {Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Errors from '../errors';

export default class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.user;
  }

  handleInput(type){
    return e => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  render(){

    return(
      <div>
        <Modal.Header closeButton>
          <h4>Log In</h4>
        </Modal.Header>
        <form id="session-form"
          onSubmit= {this.handleSubmit.bind(this)}
          className ="session-form" >
          <Modal.Body>
            <Errors errors={this.props.errors}/>
            <div className="form-group">
              <label htmlFor="username-input">Username</label>
              <input
                type="text"
                className= "form-control"
                id = "username-input"
                value={this.state.username}
                onChange={this.handleInput("username")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-input">Password</label>
                <input
                  type="password"
                  className= "form-control"
                  id = "password-input"
                  value={this.state.password}
                  onChange={this.handleInput("password")}
                />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Link
              to="/signup"
              className="signup-link">Sign Up
            </Link>
            <input
              type="submit"
              className="submit-button"
              value="sign in"/>
          </Modal.Footer>
        </form>
      </div>
    );
  }
}
