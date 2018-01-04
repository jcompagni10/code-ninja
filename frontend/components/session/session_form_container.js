import SessionForm from "./session_form";
import { login, signupUser } from "../../actions/session";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signupUser(user))
  };
};

const mapSateToProps = state => ({
  errors: state.sessionErrors
});

export default connect(mapSateToProps, mapDispatchToProps)(SessionForm);
