class AddFightIdToUserSolution < ActiveRecord::Migration[5.1]
  def change
    add_column :user_solutions, :fight_id, :integer
  end
end
