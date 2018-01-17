import { RECIEVE_FIGHT_RESULTS } from "../actions/head_to_head";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_FIGHT_RESULTS:
      return Object.assign([], action.results);
    default:
      return state;
  }
};
