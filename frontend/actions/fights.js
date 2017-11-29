import {postBotFight} from '../util/fight_api_util';
export const START_FIGHT = "START_FIGHT";

const startTime = (payload, opponent) => ({
  type: START_FIGHT,
  payload,
  opponent

});

export const startBotFight = botId => dispatch =>{
  return postBotFight(botId)
    .then(payload=>dispatch(startTime(payload, "bot")),
      errors => console.log("FAIL", errors)
    );
};
