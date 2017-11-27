import {getTask, postSolution} from '../util/task_api_util';
export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_TEST_RESULTS = "RECEIVE_TEST_RESULTS";

const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

const receiveTestResults = testResults => ({
  type: RECEIVE_TEST_RESULTS,
  testResults
});

export const fetchTask = (id) => dispatch => {
  return getTask(id)
    .then(task =>(
      dispatch(receiveTask(task)),
      errors => console.log("FAIL", errors)
    ));
};

export const submitSolution = (solution) => dispatch => {
  return postSolution(solution)
    .then(testResults =>(
      dispatch(receiveTestResults(testResults)),
      errors => console.log("FAIL", errors)
    ));
};
