import {RECEIVE_TEST_ERRORS, RECEIVE_TASK, RECEIVE_TEST_RESULTS} from '../actions/task';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_TASK:
    return {};
  case  RECEIVE_TEST_RESULTS:
    return {};
  case RECEIVE_TEST_ERRORS:
    return Object.assign({}, action.errors);
  default:
    return state;
  }
};
