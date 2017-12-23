import {RECEIVE_LEVEL_SETS} from '../actions/arcade';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_LEVEL_SETS:
    return Object.assign({}, action.levelSets);
  default:
    return state;
  }
};
