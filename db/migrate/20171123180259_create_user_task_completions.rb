class CreateUserTaskCompletions < ActiveRecord::Migration[5.1]
  def change
  create_table :user_task_completions do |t|
    t.integer :task_id, null: false, index: true
    t.integer :user_id, null: false, index: true
    t.integer :chars, null: false
    t.string :mode

    t.timestamps
  end
  end
end
