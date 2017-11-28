class Task < ApplicationRecord
  validates :fxn_name,
            :description,
            :example,
            :time_limit,
            :output_type,
            :output_description,
            presence: true
  validates :title, presence: true, uniqueness: true

  belongs_to :levelSet,
             optional: true

  has_many :userTaskCompletions

  has_many :inputs

  has_many :user_solutions
  has_many :tests

  def completed(user, mode)
    !userTaskCompletions.where(user: user, mode: mode).empty?
  end

  def function_skeleton
    inputs = self.inputs.pluck(:input_name).join(", ")
    "def #{fxn_name}(#{inputs})\n\nend"
  end

end
