import { combineReducers } from "redux";
import levelSets from "./level_sets";
import bots from "./bots";
import currentTask from "./current_task";
import currentTests from "./current_tests";
import currentTestErrors from "./current_test_errors";
import challenges from "./challenges";
import fight_results from "./fight_results";

export default combineReducers({
  levelSets,
  bots,
  challenges,
  currentTask,
  currentTests,
  currentTestErrors,
  fight_results
});
