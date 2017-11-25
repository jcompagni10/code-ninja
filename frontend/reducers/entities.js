import {combineReducers} from 'redux';
import levelSets from "./level_sets";
import bots from "./bots";

export default combineReducers({
  levelSets,
  bots
});
