json.by_id do
  @bots.each do |bot|
    json.set! bot.id do
      json.id bot.id
      json.name bot.name
      json.description bot.description
      json.task_id bot.task_id
      json.image_url bot.image_url
      json.time bot.time
      json.wins bot.wins
      json.losses bot.losses
      json.ties bot.ties
      json.completed bot.user_beaten(current_user)
    end
  end
end
json.ids do
  json.array! Bot.ordered_ids
end
