import {RECEIVE_TEST_RESULTS} from '../actions/task';
import {RECEIVE_TASK} from '../actions/task';
import {merge, isEmpty} from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let tests;
  switch (action.type) {
    case RECEIVE_TASK:
      if (!isEmpty(action.task.tests)){
        // TODO: maybe won't be inorder
        return Object.values(action.task.tests);
      } else {
        return {};
      }
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
