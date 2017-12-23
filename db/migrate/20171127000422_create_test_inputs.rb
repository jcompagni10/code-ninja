class CreateTestInputs < ActiveRecord::Migration[5.1]
  def change
  create_table :test_inputs do |t|
    t.integer :test_id, null: false, index: true
    t.integer :order, null: false
    t.string :value, null: false
    t.timestamps
  end
  end
end
