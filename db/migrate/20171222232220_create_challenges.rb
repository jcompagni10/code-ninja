class CreateChallenges < ActiveRecord::Migration[5.1]
  def change
  create_table :challenges do |t|
    t.integer :task_id, null: false
    t.string :title, null: false
    t.timestamps
  end
  end
end
