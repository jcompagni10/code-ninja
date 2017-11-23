
json.by_id do
  @level_sets.each do |lvl_set|
    json.set! lvl_set.id do
      json.extract! lvl_set, :name, :image_url
      json.tasks do
        json.array! lvl_set.ordered_tasks, :id, :title
      end
    end
  end
end
json.ids do
  json.array! LevelSet.ordered_ids
end
