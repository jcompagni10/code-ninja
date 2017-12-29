import {getUsers} from '../util/head_to_head_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (users) =>({
  type: RECEIVE_USERS,
  users: users.results
});

export const fetchUsers = (query) => dispatch => {
  return getUsers(query)
  .then(users =>(
    dispatch(receiveUsers(users)),
    errors => console.log("FAIL", errors)
  ));
};
  