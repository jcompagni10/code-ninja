class UserSolution < ApplicationRecord
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
      self.update({score: 300})
      self.user.score += self.score
      self.user.save
      UserTaskCompletion.create(
        task_id: self.task.id,
        user_id: self.user.id,
        # TODO: remove whitespace
        chars: self.solution.length,
        mode: :arcade
      )
    end
  end
  # TODO: catch all types of errors
  # TODO: return error type
  def run_tests
    begin
      test_suite = self.task.tests.order(:order)
      self.create_function
      test_results = {}
      test_suite.each do |test|
      timeout(self.task.time_limit / 1000) do
        inputs = test.parsed_inputs
        result = send(self.task.fxn_name, *inputs)
        passed = result == test.output
        test_result = {
          passed: passed,
          expected: test.output.to_s,
          received: result.to_s
        }
        test_results[test.order] = test_result
      end
    end
    rescue Timeout::Error
      return {error: true, error_message: "Execution exceeded time limit."}
    rescue Exception => e
      # TODO: support multiple langues with file name
      message = e.message.sub(/#<UserSolution:[a-z0-9]*>/, "CODE.RB")
      return {error: true, error_message: message}
    ensure
    end
    handle_completion(test_results)
    test_results[user_score]
  end


  def create_function
    timeout(2) do
      instance_eval(self.solution)
    end
  end



end
