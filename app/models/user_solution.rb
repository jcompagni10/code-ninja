class UserSolution < ApplicationRecord
  validates :mode,
            :solution,
            :solution,
            :score,
            presence: true
  validates :completed, inclusion: { in: [true, false] }
  # TODO: is this right?
  validates :user_id, uniqueness: { scope: [:mode, :task_id] }

  belongs_to :user
  belongs_to :task

end
