import {combineReducers} from 'redux';
import levelSets from "./level_sets";
import bots from "./bots";
import currentTask from "./current_task";

export default combineReducers({
  levelSets,
  bots,
  currentTask
});
