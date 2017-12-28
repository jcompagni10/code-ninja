class UserSolution < ApplicationRecord
  require 'net/http'
  include Timeout
  validates :mode,
      :solution,
      :score,
      presence: true
  validates :completed, inclusion: { in: [true, false] }
  # TODO: is this right?
  validates :user_id, uniqueness: { scope: [:mode, :task_id] }

  belongs_to :user
  belongs_to :task

  def handle_completion(test_results)
    if test_results.values.all? { |t| t[:passed] } && self.score == 0
      case mode
      when "bots"
      UserBotCompletion.handle_completion(self, nil, "win")
      when "arcade"
      UserTaskCompletion.handle_completion(self, "arcade")
      when "challenges"
      UserTaskCompletion.handle_completion(self, "challenges")
      end
    end
  end

  # TODO: catch all types of errors
  # TODO: return error type
  # TODO handle network timeout

  def get_tests
    tests = self.task.tests.order(:order)
    tests.map do |test|
      test_string = task.fxn_name + "("
      test_string + "..."+test.parsed_inputs.to_s + ")"
    end
  end

  def run_tests
    test_suite = get_tests
    formated_user_code = self.solution.gsub("\n", " ")
    data = JSON.dump({user_code: formated_user_code, tests: test_suite})
    uri = URI.parse("https://wci7v1nq8j.execute-api.us-west-2.amazonaws.com/v1")
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Post.new(uri.request_uri)
    request.body = data
    response = http.request(request)
    response = JSON.parse(response.body)
    if response["errorMessage"]
      message = response["errorMessage"]
        if message.include?("timed out")
          message = "Task timed out after 4.00 seconds"
      end
      return {error: true, error_message: message }
    end
    user_results = response["results"]
    test_results = {log: response["log"].gsub("\n", "<br/>"), results: {} }
    test_suite.each_with_index do |test, idx|
      result = user_results[idx]
      passed = result == test.output
      test_result = {
        passed: passed,
        expected: test.output.to_s,
        received: result.to_s
      }
      test_results[:results][test.order] = test_result
    end
    handle_completion(test_results[:results])
    test_results
  end
end
