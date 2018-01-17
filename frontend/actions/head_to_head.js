import { getUsers, getFightResults } from "../util/head_to_head_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECIEVE_FIGHT_RESULTS = "RECIEVE_FIGHT_RESULTS";

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users: users.results
});

const receiveFightResults = results => ({
  type: RECIEVE_FIGHT_RESULTS,
  results
});

export const fetchFightResults = () => dispatch => {
  return getFightResults().then(
    results => (
      dispatch(receiveFightResults(results), errors => console.log("FAIL", errors))
    )
  );
};

export const fetchUsers = query => dispatch => {
  return getUsers(query).then(
    users => (
      dispatch(receiveUsers(users)), errors => console.log("FAIL", errors)
    )
  );
};
