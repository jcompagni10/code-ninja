import {getBots} from '../util/bot_api_util';
export const RECEIVE_BOTS = "RECEIVE_BOTS";

const receiveBots = bots => ({
  type: RECEIVE_BOTS,
  bots
});

export const fetchBots = () => dispatch => {
  return getBots()
    .then(bots =>(
      dispatch(receiveBots(bots)),
      errors => console.log("FAIL", errors)
    ));
};
