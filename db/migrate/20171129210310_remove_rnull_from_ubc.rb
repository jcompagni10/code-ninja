class RemoveRnullFromUbc < ActiveRecord::Migration[5.1]
  def change
  change_column :user_bot_completions, :time, :integer, :null => true
  end
end
