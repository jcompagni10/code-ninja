class Challenge < ApplicationRecord

  belongs_to :task

  has_many :user_completions,
           through: :task,
           source: :user_task_completions

  has_many :user_solutions,
           through: :task,
           source: :user_solutions

  def completed(user_id)
    task.completed(user_id, :challenges)
  end

  def completions
    user_completions.where(mode: "challenges").count
  end

  def attempts
    user_solutions.where(mode: "challenges").count
  end

  def shortest
    user_completions.where(mode: "challenges").order(:chars).limit(1).first || "---"
  end
  
end
