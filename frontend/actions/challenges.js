import {getChallenges} from '../util/challenges_api_util';
export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";

const receiveChallenges = challenges => ({
  type: RECEIVE_CHALLENGES,
  challenges
});

export const fetchChallenges = () => dispatch => {
  return getChallenges()
  .then(challenges =>(
    dispatch(receiveChallenges(challenges)),
    errors => console.log("FAIL", errors)
  ));
};
