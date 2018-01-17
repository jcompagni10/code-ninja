import { postBotFight, updateBotFight } from "../util/fight_api_util";
import {createFight} from "../util/head_to_head_api_util";
export const RECEIVE_FIGHT = "RECEIVE_FIGHT";
export const END_FIGHT = "END_FIGHT";
export const SET_FIGHT_STATUS = "SET_FIGHT_STATUS";

const receiveFight = (payload, opponent) => ({
  type: RECEIVE_FIGHT,
  payload,
  opponent
});

export const setFightStatus = status => ({
  type: SET_FIGHT_STATUS,
  status
});

export const loadBotFight = botId => dispatch => {
  return postBotFight(botId).then(
    payload => dispatch(receiveFight(payload, "bot")),
    errors => console.log("FAIL", errors)
  );
};

export const createH2HFight = () => dispatch => {
  return createFight().then(
    payload => dispatch(receiveFight(payload, "player")),
    errors => console.log("FAIL", errors)
  );
};


export const endFight = fightId => dispatch =>
  updateBotFight(fightId).then(setFightStatus("over"), errors =>
    console.log(errors)
  );
