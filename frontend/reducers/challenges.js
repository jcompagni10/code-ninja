import { RECEIVE_CHALLENGES } from "../actions/challenges";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHALLENGES:
      return Object.assign({}, action.challenges);
    default:
      return state;
  }
};
