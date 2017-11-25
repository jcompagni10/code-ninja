class UserBotCompletion < ApplicationRecord
  validates :time, presence: true
  
  belongs_to :bot
  belongs_to :user
end
