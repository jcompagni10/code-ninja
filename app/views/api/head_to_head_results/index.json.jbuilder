json.record do
  wins = @fights.count(true)
  json.wins wins
  json.losses @fights.length - wins
  json.ties 0
end

json.history @fights
