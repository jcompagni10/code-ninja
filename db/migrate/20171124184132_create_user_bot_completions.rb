class CreateUserBotCompletions < ActiveRecord::Migration[5.1]
  def change
  create_table :user_bot_completions do |t|
    t.integer :bot_id, null: false
    t.integer :user_id, null: false
    t.integer :time, null: false
    t.timestamps
  end
  end
end
