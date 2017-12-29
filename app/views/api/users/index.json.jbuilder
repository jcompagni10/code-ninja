json.results do 
  json.array! @users, :username, :img_url, :score, :id
end