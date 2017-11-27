@test_results.each do |order, results|
  json.set! order do
    json.extract! results, :passed, :expected, :received
  end
end
