import { RECEIVE_CURRENT_USER } from '../actions/session';
import {START_FIGHT} from '../actions/fights';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_FIGHT:
      return {
        timerVisible: true,
        timeLimit: action.payload.time_limit,
        fightId: action.payload.fight_id,
        opponent: action.opponent};
    // case END_FIGHT:
    //   return {};
    default:
      return state;
  }
};
