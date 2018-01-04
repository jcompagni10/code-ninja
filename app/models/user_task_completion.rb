class UserTaskCompletion < ApplicationRecord
  validates :mode, :chars, presence: true

  belongs_to :user
  
  belongs_to :task

  def self.complete_task(task, mode, chars, user)
    create(task_id: task.id, mode: mode, chars: chars, user_id: user.id)
  end

  def self.handle_completion(submission, mode)
    completion = UserTaskCompletion.find_or_initialize_by(
      task_id: submission.task.id,
      user_id: submission.user.id,
      mode: mode
    )
    completion.chars = submission.solution.length
    if completion.new_record?
      completion.user.score += 300
      completion.user.save
    end
    completion.save
  end
end
