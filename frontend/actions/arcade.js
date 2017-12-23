import {getLevelSets} from '../util/arcade_api_util';
export const RECEIVE_LEVEL_SETS = "RECEIVE_LEVEL_SETS";

const receiveLevelSets = levelSets => ({
  type: RECEIVE_LEVEL_SETS,
  levelSets
});

export const fetchLevelSets = () => dispatch => {
  return getLevelSets()
  .then(levelSets =>(
    dispatch(receiveLevelSets(levelSets)),
    errors => console.log("FAIL", errors)
  ));
};
