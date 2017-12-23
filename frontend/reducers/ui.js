import {START_LOADING_TEST_RESULTS, RECEIVE_TEST_RESULTS, RECEIVE_TEST_ERRORS} from '../actions/task';

export default (state = {testsLoading: false}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case START_LOADING_TEST_RESULTS:
    return {testsLoading: true};
  case RECEIVE_TEST_RESULTS:
    return {testsLoading: false};
  case RECEIVE_TEST_ERRORS:
    return {testsLoading: false};
  default:
    return state;
  }
};
