import {
  START_LOADING_TEST_RESULTS,
  RECEIVE_TEST_RESULTS,
  RECEIVE_TEST_ERRORS
} from "../actions/task";
import { RECEIVE_USERS } from "../actions/head_to_head";
export default (state = { testsLoading: false, users: [] }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_TEST_RESULTS:
      return Object.assign({}, state, { testsLoading: true });
    case RECEIVE_TEST_RESULTS:
      return Object.assign({}, state, { testsLoading: false });
    case RECEIVE_TEST_ERRORS:
      return Object.assign({}, state, { testsLoading: false });
    case RECEIVE_USERS:
      return Object.assign({}, state, { users: action.users });
    default:
      return state;
  }
};
