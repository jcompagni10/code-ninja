class Input < ApplicationRecord
  validates :order, :input_name, :input_type, :constraints, presence: true
  validates :input_name, uniqueness: true

  belongs_to :task
end
