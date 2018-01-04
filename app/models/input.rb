class Input < ApplicationRecord
  validates :order, :input_name, :input_type, :constraints, presence: true
  # TODO: broken?
  # validates :input_name, uniqueness: {scope: :task_id}


  belongs_to :task,
             dependent: :destroy
end
