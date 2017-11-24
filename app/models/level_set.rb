class LevelSet < ApplicationRecord
  validates :name, :order, :image_url, presence: true

  after_initialize :ensure_image_url

  has_many :tasks

  def ensure_image_url
    self.image_url = "default_level_set.png"
  end

  def ordered_tasks
    tasks.sort_by(&:order)
  end

  def self.ordered_ids
    LevelSet.all.sort_by(&:order)
    .map(&:id)
  end

  def completed(user)
    tasks.all?{|task| task.completed(user, :arcade)}
  end
end
