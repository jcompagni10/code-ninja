class Test < ApplicationRecord
  validates :order, presence: true
  # TODO: allow false as output value
  validates :hidden, inclusion: { in: [true, false] }
  
  serialize :output

  belongs_to :task

  has_many :task_inputs,
           through: :task,
           source: :inputs

  has_many :inputs,
           class_name: :TestInput

  # TODO: handle other input type
  def parsed_inputs
    inputs = self.inputs.order(:order).pluck(:value)
    task_input_types = self.task_inputs.order(:order).pluck(:input_type)
    inputs.map.with_index do |input, idx|
      parse_by_type(input, task_input_types[idx])
    end
  end

  def parsed_output
    parse_by_type(self.output, self.task.output_type)
  end
end
