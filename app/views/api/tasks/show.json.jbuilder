json.extract! @task,
  :id,
  :title,
  :fxn_name,
  :description,
  :example,
  :time_limit,
  :output_type,
  :output_description
json.inputs do
  json.array! @task.inputs do |input|
    json.extract! input, :id, :order, :input_name, :input_type, :constraints
  end
end
