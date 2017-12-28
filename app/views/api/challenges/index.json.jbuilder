json.by_id do
  @challenges.each do |challenge|
    json.set! challenge.id do  
      json.extract! challenge, :title, :img_url, :completed
    end
  end
end
json.all_ids do 
  json.array! @challenges.pluck(:id)
end
