class UserTaskCompletion < ApplicationRecord
  validates :mode, :chars, presence: true

  belongs_to :user
  belongs_to :task

  def self.complete_task(task, mode, chars, user)

    create(task_id: task.id, mode: mode, chars: chars, user_id: user.id)
  end
end
