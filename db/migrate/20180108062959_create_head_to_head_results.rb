class CreateHeadToHeadResults < ActiveRecord::Migration[5.1]
  def change
    create_table :head_to_head_results do |t|
      t.integer :task_id
      t.integer :challenger_id
      t.integer :recipient_id
      t.integer :chalanger_time
      t.integer :recipient_time
      t.string :status

      t.timestamps
    end
  end
end
