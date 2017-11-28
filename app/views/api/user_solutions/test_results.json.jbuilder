if @test_results[:error]
  json.errors @test_results
else
@test_results.each do |order, results|
    json.set! order do
      json.extract! results, :passed, :expected, :received
    end
  end
end

# TODO: use this
# json.passed_percent [@test_results.count{:passed}, @test_results.count]
