json.extract! user, :username, :email, :img_url, :score
json.progress do
  json.arcade [LevelSet.user_completed_tasks(current_user), LevelSet.total_tasks]
end
