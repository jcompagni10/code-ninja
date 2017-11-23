
json.by_id do
  @level_sets.each do |lvl_set|
    json.set! lvl_set.id do
      json.extract! lvl_set, :name, :image_url
      end
    end
  end
end
