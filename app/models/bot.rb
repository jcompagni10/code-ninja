class Bot < ApplicationRecord
  validates :task_id,
            :name,
            :description,
            :order,
            :time,
            :wins,
            :losses,
            :ties,
            :image_url, 
            presence: true
  validates :name, uniqueness: true

  has_many :user_bot_completions

  def user_beaten(user)
    !user_bot_completions.where(user_id: user.id)
      .where(status: "win").empty?
  end

  def self.user_beaten_bots(user)
    # TODO: eliminate n+1 query
    Bot.all.includes(:user_bot_completions).count { |b| b.user_beaten(user) }
  end

  def self.ordered_ids
    Bot.all.sort_by(&:order)
      .map(&:id)
  end

  def win
    self.wins += 1
    save
  end

  def loss
    self.losses += 1
    save
  end

  def tie
    self.ties += 1
    save
  end

end
