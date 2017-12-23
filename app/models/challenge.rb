class Challenge < ApplicationRecord

  belongs_to :task

  def completed
   true
  end
  
end
