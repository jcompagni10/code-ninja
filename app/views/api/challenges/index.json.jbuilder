json.set! :by_id do
  @challenges.each do |challenge|
    json.set! challenge.id do  
      json.title challenge.title
      json.completed true
    end
  end
end
json.set! :all_ids do 
  json.array! @challenges.pluck(:id)
end