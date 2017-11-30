class UserBotCompletion < ApplicationRecord
  validates :status, presence: true

  belongs_to :bot
  belongs_to :user

  def self.handle_completion(solution, fight_id, status)
    if solution
      bot = Bot.find_by(task_id: solution.task_id)
      params = {
        bot: bot,
        user: solution.user,
        status: "pending"
      }
    else
      params = {
        id: fight_id
      }
    end
    completion = UserBotCompletion.find_by(params)
    if completion
      completion.status = status
      if status == "win"
        completion.time = Time.now - completion.created_at
      end
      completion.save
      if status == "win"
        # TODO: less points for re-beating bot
        completion.user.score += 400
        completion.user.save
        completion.bot.loss
      elsif status == "loss"
        completion.bot.win
      end
    end
  end
end
