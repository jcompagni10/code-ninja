import {combineReducers} from 'redux';
import levelSets from "./level_sets";
import bots from "./bots";
import currentTask from "./current_task";
import currentTests from "./current_tests";

export default combineReducers({
  levelSets,
  bots,
  currentTask,
  currentTests
});
