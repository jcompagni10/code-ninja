json.task do
  json.extract! @task,
        :id,
        :title,
        :description,
        :example,
        :function_skeleton,
        :time_limit,
        :output_type,
        :output_description,
        :level_set_id,
        :order
  json.inputs do
  json.array! @task.inputs.order(:order) do |input|
    json.extract! input, :id, :order, :input_name, :input_type, :constraints
  end
  end
end
json.tests do
  @task.tests.each do |test|
  json.set! test.order do
    json.id test.id
    json.expected test.output.to_s
    json.inputs do
    json.array! test.inputs.order(:order)
      .pluck(:value)
      .map(&:to_s)
    end
  end
  end
end
