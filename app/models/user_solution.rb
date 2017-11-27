class UserSolution < ApplicationRecord
  validates :mode,
            :solution,
            :score,
            presence: true
  validates :completed, inclusion: { in: [true, false] }
  # TODO: is this right?
  validates :user_id, uniqueness: { scope: [:mode, :task_id] }

  belongs_to :user
  belongs_to :task

  def run_tests
    test_suite = self.task.tests.order(:order)
    create_function
    test_results = {};
    test_suite.each_with_index do |test, idx|
      inputs = test.parsed_inputs
      result = send(self.task.fxn_name, *inputs)
      passed = result == test.parsed_output
      test_result = {
        passed: passed,
        expected: test.parsed_output,
        received: result
      }
      test_results[idx] = test_result
    end
    test_results
  end

  def create_function
    instance_eval(self.solution)
  end



end
