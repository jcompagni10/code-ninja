import {getBots, getBot} from '../util/bot_api_util';
export const RECEIVE_BOTS = "RECEIVE_BOTS";
export const RECEIVE_BOT = "RECEIVE_BOT";

const receiveBots = bots => ({
  type: RECEIVE_BOTS,
  bots
});

const receiveBot = bot => ({
  type: RECEIVE_BOT,
  bot
});

export const fetchBots = () => dispatch => {
  return getBots()
    .then(bots =>(
      dispatch(receiveBots(bots)),
      errors => console.log("FAIL", errors)
    ));
};

export const fetchBot = (id) => dispatch => {
  return getBot(id)
    .then(bot =>(
      dispatch(receiveBot(bot)),
      errors => console.log("FAIL", errors)
    ));
};
