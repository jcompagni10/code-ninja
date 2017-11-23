import React from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import LoginForm from './login_form';
import SignupForm from './signup_form';

class SessionForm extends React.Component{

  // TODO: remove below if nothing broken
  // constructor(props){
  //   super(props);
  // }

  // componentWillReceiveProps(newprops){
  //   this.setState(newprops);
  // }




  render(){
    return(
      <Modal show={this.props.modalOpen} onHide={this.props.closeModal}>
        <Switch>
          <Route
            path="/signup"
            render={()=><SignupForm
              errors = {this.props.errors}
              action = {this.props.signup}
              user = {this.props.user}
            /> }
          />
          <Route
            path="/"
            render={()=><LoginForm
              errors = {this.props.errors}
              action ={this.props.login}
              user = {this.props.user}
            />}
          />
        </Switch>
      </Modal>
    );
  }
}

export default SessionForm;
