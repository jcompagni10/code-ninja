import {START_FIGHT, END_FIGHT} from '../actions/fights';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_FIGHT:
      return Object.assign({}, state, {fightInProgresss: true});
    case END_FIGHT:
      return Object.assign({}, state, {fightInProgresss: false});
    default:
      return state;
  }
};
