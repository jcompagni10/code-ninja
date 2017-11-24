class Task < ApplicationRecord
  validates :fxn_name, :description, :example, :time_limit, :output_type, :output_description, presence: true
  validates :title, presence: true, uniqueness: true

    belongs_to :levelSet,
    optional: true

    has_many :userTaskCompletions

    def completed(user, mode)
      !userTaskCompletions.where(user: user, mode: mode).empty?
    end
end
