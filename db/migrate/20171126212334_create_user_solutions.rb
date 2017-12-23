class CreateUserSolutions < ActiveRecord::Migration[5.1]
  def change
  create_table :user_solutions do |t|
    t.integer :user_id, null: false
    t.integer :task_id, null: false, index: true
    t.string :mode, null: false
    t.text :solution, null: false
    t.boolean :completed, null: false, default: false
    t.integer :score, null: false, default: 0

    t.timestamps
  end
  add_index :user_solutions, [:user_id, :task_id, :mode], unique: true
  end
end
