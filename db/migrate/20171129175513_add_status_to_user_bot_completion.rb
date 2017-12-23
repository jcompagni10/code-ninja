class AddStatusToUserBotCompletion < ActiveRecord::Migration[5.1]
  def change
  add_column :user_bot_completions, :status, :string, null: false
  end
end
