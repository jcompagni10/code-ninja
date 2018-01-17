if @fight.challenger == current_user
  json.opponent @fight.recipient_id
else
  json.opponent @fight.challenger_id
end
json.recipient_id @fight.recipient_id
json.task_id @fight.task_id
json.fight_id @fight.id
json.time_limit 120000