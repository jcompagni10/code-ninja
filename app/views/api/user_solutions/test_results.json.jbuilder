@test_results.each do |k, v|
  json.set! k do
    json.extract! v, :passed, :expected, :received
  end
end
