import {RECEIVE_BOTS} from '../actions/bots';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOTS:
      return Object.assign({}, action.bots);
    default:
      return state;
  }
};
