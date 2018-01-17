import { RECEIVE_CURRENT_USER } from "../actions/session";
import { RECEIVE_FIGHT, END_FIGHT, SET_FIGHT_STATUS } from "../actions/fights";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FIGHT:
      return {
        timeLimit: action.payload.time_limit,
        fightId: action.payload.fight_id,
        opponent: action.opponent,
        taskId: action.payload.task_id,
        status: "ready"
      };
    case SET_FIGHT_STATUS:
      return Object.assign({}, state, { status: action.status });
    case END_FIGHT:
      return {};
    default:
      return state;
  }
};
