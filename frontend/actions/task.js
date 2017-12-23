import {getTask, postSolution} from '../util/task_api_util';
export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_TEST_RESULTS = "RECEIVE_TEST_RESULTS";
export const RECEIVE_TEST_ERRORS = "RECEIVE_TEST_ERRORS";
export const START_LOADING_TEST_RESULTS = "START_LOADING_TEST_RESULTS";

const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

const receiveTestResults = testResults => ({
  type: RECEIVE_TEST_RESULTS,
  testResults
});

const receiveTestErrors = errors => ({
  type: RECEIVE_TEST_ERRORS,
  errors
});

const startLoadingTestResults = () => ({
  type: START_LOADING_TEST_RESULTS,
});

export const fetchTask = (id) => dispatch => {
  return getTask(id)
  .then(task =>(
    dispatch(receiveTask(task)),
    errors => console.log("FAIL", errors)
  ));
};

function handleTestResults(testResults, dispatch){
  if (testResults.errors){
  dispatch(receiveTestErrors(testResults.errors));
  } else {
  dispatch(receiveTestResults(testResults));
  }
}
export const submitSolution = (solution) => dispatch => {
  dispatch(startLoadingTestResults());
  return postSolution(solution)
  .then(testResults => handleTestResults(testResults,dispatch),
    errors => console.log("FAIL", errors)
  );
};
