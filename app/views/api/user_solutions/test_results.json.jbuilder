if @test_results[:error]
  json.errors @test_results
  json.passed false
else
  json.tests do
    @test_results.each do |order, results|
      json.set! order do
        json.extract! results, :passed, :expected, :received
      end
    end
  end
  json.passed (@test_results.all? { |_, test| test[:passed] })
end
json.user_score current_user.score
# TODO: use this
# json.passed_percent [@test_results.count{:passed}, @test_results.count]
