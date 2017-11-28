import {RECEIVE_TEST_RESULTS} from '../actions/task';
import {RECEIVE_TASK} from '../actions/task';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  let tests;
  switch (action.type) {
    case RECEIVE_TASK:
      tests = Object.keys(action.task.tests);
      return tests.map(key => (
        merge({}, state[key], action.task.tests[key] )
      ));
    case RECEIVE_TEST_RESULTS:
      tests = Object.keys(action.testResults);
      tests = tests.map(key => (
        action.testResults[key] )
      );
      return merge({}, state, tests);
    default:
      return state;
  }
};
