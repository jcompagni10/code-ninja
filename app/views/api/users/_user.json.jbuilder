json.extract! user, :username, :email, :img_url, :score
json.progress do
  json.arcade [LevelSet.user_completed_tasks(current_user), LevelSet.total_tasks]
  json.bots [Bot.user_beaten_bots(current_user), Bot.count]
end
