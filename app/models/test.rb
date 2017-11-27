class Test < ApplicationRecord
  validates :order, :output, presence: true
  validates :hidden, inclusion: { in: [true, false] }

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
      send(task_input_types[idx], input)
    end
  end

  def parsed_output
    send(self.task.output_type, self.output)
  end
end
