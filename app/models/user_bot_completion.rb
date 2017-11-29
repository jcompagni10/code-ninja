class UserBotCompletion < ApplicationRecord
  validates :status, presence: true

  belongs_to :bot
  belongs_to :user
end
