import {RECEIVE_TASK} from '../actions/task';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK:
      return Object.assign({}, action.task.task);
    default:
      return state;
  }
};
