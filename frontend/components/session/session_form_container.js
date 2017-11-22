import SessionForm from './session_form';
import {login, signupUser} from '../../actions/session';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) =>{
  let submitAction = (ownProps.isLogin) ? login : signupUser;
  return {action: (user)=>dispatch(submitAction(user)) };
};

export default connect(null, mapDispatchToProps)(SessionForm);
