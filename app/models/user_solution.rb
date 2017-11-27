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


  # TODO: catch all types of errors
  # TODO: return error type
  def run_tests
    test_suite = self.task.tests.order(:order)
    begin
      errors = create_function
      # if errors
      #   return errors
      # end
      test_results = {}
      test_suite.each do |test|
        timeout(self.task.time_limit/1000) do
          inputs = test.parsed_inputs
          result = send(self.task.fxn_name, *inputs)
          passed = result == test.parsed_output
          test_result = {
            passed: passed,
            expected: test.parsed_output,
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
    end
    test_results
  end


  def create_function
    timeout(1) do
      instance_eval(self.solution)
    end
  end



end
