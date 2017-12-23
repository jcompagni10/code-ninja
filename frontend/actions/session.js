import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = formUser => dispatch => {
  return APIUtil.loginUser(formUser)
  .then(user => {
    dispatch(receiveCurrentUser(user));
    dispatch(clearErrors());
  },
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => (
  APIUtil.logoutUser()
  .then(() => dispatch(receiveCurrentUser(null)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signupUser = formUser => dispatch => (
   APIUtil.postUser(formUser)
  .then(user => {
    dispatch(receiveCurrentUser(user));
    dispatch(clearErrors());
  },
  errors => dispatch(receiveErrors(errors.responseJSON)))
);
