class UserBotCompletion < ApplicationRecord
  validates :status, presence: true

  belongs_to :bot
  belongs_to :user

  def self.handle_completion(solution)
    completion = UserBotCompletion.find_by(
      bot: solution.bot,
      user: solution.user,
      status: "pending"
    )
    if completion
      completion.status = result
      save
      if result == "win"
        # TODO: less points for re-beating bot
        completion.user.score += 400
        completion.user.save
        completion.bot.loss
      elsif result == "loss"
        completion.bot.loss
      end
    end
  end
end
