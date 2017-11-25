import {getTask} from '../util/task_api_util';
export const RECEIVE_TASK = "RECEIVE_TASK";

const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const fetchTask = (id) => dispatch => {
  return getTask(id)
    .then(task =>(
      dispatch(receiveTask(task)),
      errors => console.log("FAIL", errors)
    ));
};
