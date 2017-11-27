import {RECEIVE_TEST_RESULTS} from '../actions/task';
import {RECEIVE_TASK} from '../actions/task';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK:
      return Object.assign({}, action.task.tests);
    case RECEIVE_TEST_RESULTS:
      let tests = Object.keys(action.testResults);
      return tests.map(key => (
        merge({}, state[key], action.testResults[key] )
      ));
    default:
      return state;
  }
};
