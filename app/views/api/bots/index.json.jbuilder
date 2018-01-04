json.by_id do
  @bots.each do |bot|
    json.partial! "api/bots/bot", bot: bot
  end
end
json.ids do
  json.array! Bot.ordered_ids
end
