class Task < ApplicationRecord
  validates :fxn_name,
      :description,
      :example,
      :time_limit,
      :output_type,
      :output_description,
      presence: true
  validates :title, presence: true, uniqueness: true
  belongs_to :levelSet,
       optional: true

  has_many :user_task_completions

  has_many :inputs

  has_many :user_solutions
  has_many :tests

  def completed(user, mode)
    !user_task_completions.where(user: user, mode: mode).empty?
  end

  def function_skeleton
    inputs = self.inputs.pluck(:input_name).join(", ")
    "function #{fxn_name}(#{inputs}){\n\n}"
  end

  # seed convenience method
  def bulk_test_builder(tests)
    self.tests.destroy_all
    tests.each_with_index do |test, idx|
      test_builder(idx, test.shift, *test)
    end
  end

  def test_builder(order, output, *inputs)
    test = self.tests.create!(output: output, order: order, hidden: false)
    inputs.each_with_index do |input, idx|
      test.inputs.create(order: idx, value: input)
    end
  end

  def bulk_input_builder(task_inputs)
    self.inputs.destroy_all
    defaults = task_inputs[0]
    task_inputs.each_with_index do |input, idx|
      input[0] = defaults[0][0...-1] + (idx+1).to_s if input[0].nil?
      input[1] = defaults[1] if input[1].nil?
      if input[2].nil?
      input[2] = defaults[2].sub(defaults[0], input[0])
      end
      input_builder(idx+1, *input)
    end
  end

  def input_builder(order, name, type, constraints)
    self.inputs.create!(order: order,
              input_name: name,
              input_type: type,
              constraints: constraints)
  end
end
