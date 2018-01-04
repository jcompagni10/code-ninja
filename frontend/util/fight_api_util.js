export const postBotFight = botId =>
  $.ajax({
    method: "POST",
    url: "api/user_bot_completions",
    data: { botId }
  });

export const updateBotFight = (fightId, status) =>
  $.ajax({
    method: "PATCH",
    url: "api/user_bot_completions/" + fightId,
    data: { status }
  });
