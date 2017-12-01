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
        return {
          tests: Object.values(action.task.tests),
          passed: "",
          log: ""
        };

      } else {
        return {};
      }
    case RECEIVE_TEST_RESULTS:
      tests = Object.keys(action.testResults.tests);
      tests = tests.map(key => (
        action.testResults.tests[key] )
      );
      return {
        tests: merge({}, state.tests, tests),
        passed: action.testResults.passed,
        log: action.testResults.log
      };
    default:
      return state;
  }
};
