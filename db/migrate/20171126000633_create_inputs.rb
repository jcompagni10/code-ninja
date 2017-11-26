class CreateInputs < ActiveRecord::Migration[5.1]
  def change
    create_table :inputs do |t|
      t.integer :task_id, null: false, index: true
      t.integer :order, null: false
      t.string :input_name, null: false
      t.string :input_type, null: false
      t.string :constraints, null: false

      t.timestamps
    end
  end
end
