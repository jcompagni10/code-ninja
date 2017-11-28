class TestInput < ApplicationRecord
  validates :order, :value, presence: true
  serialize :value
  belongs_to :test
end
