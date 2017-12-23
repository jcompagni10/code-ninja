class CreateTests < ActiveRecord::Migration[5.1]
  def change
  create_table :tests do |t|
    t.integer :task_id, null: false, index: true
    t.integer :order, null: false
    t.string :output, null: false
    t.boolean :hidden, null: false, default: false

    t.timestamps
  end
  end
end
