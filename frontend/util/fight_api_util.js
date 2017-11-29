export const postBotFight = (botId)=>(
  $.ajax({
    method: "POST",
    url: "api/user_bot_completions",
    data: {botId}
  })
);
