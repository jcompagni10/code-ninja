
json.by_id do
  @level_sets.each do |lvl_set|
  json.set! lvl_set.id do
    json.name lvl_set.name
    json.image_url lvl_set.image_url
    json.completed lvl_set.completed(current_user)
    json.tasks do
    json.array! lvl_set.ordered_tasks do |task|
      json.id task.id
      json.title task.title
      json.completed task.completed(current_user, :arcade)
    end
    end
  end
  end
end
json.ids do
  json.array! LevelSet.ordered_ids
end
