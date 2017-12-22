import {getChallenges} from '../util/challenges_api_util';
export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";

const receiveChallenges = challenges => ({
  type: RECEIVE_CHALLENGES,
  challenges
});

export const fetchLevelSets = () => dispatch => {
  return getChallenges()
    .then(challenges =>(
      dispatch(receiveChallenges(challenges)),
      errors => console.log("FAIL", errors)
    ));
};
