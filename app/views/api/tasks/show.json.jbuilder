json.task do
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
    json.array! @task.inputs.order(:order) do |input|
      json.extract! input, :id, :order, :input_name, :input_type, :constraints
    end
  end
end
json.tests do
  @task.tests.each do |test|
    json.set! test.order do
      json.id test.id
      json.expected test.output
      json.inputs do
        json.array! test.inputs.order(:order).pluck(:value)
      end
    end
  end
end
