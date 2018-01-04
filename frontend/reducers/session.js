import { RECEIVE_CURRENT_USER } from "../actions/session";
import { RECEIVE_TEST_RESULTS } from "../actions/task";

export default (state = { currentUser: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.currentUser });
    case RECEIVE_TEST_RESULTS:
      const newUser = Object.assign({}, state.currentUser);
      newUser.score = action.testResults.user_score;
      return Object.assign({}, state, { currentUser: newUser });
    default:
      return state;
  }
};
