class TestInput < ApplicationRecord
  validates :order, :value, presence: true

  belongs_to :test
end
