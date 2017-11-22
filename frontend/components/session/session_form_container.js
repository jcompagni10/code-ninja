import SessionForm from './session_form';
import {login, signupUser} from '../../actions/session';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) =>{
  let submitAction = (ownProps.isSignup) ?  signupUser: login;
  return {action: (user)=>dispatch(submitAction(user)) };
};

export default connect(null, mapDispatchToProps)(SessionForm);
