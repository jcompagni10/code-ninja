import {RECEIVE_BOTS, RECEIVE_BOT} from '../actions/bots';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOTS:
      return Object.assign({}, action.bots);
    case RECEIVE_BOT:
      return Object.assign({}, state, {by_id: action.bot});
    default:
      return state;
  }
};
