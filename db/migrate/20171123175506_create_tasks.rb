class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false, unqiue: true
      t.integer :level_set_id, index: true
      t.integer :order
      t.string :fxn_name, null: false
      t.string :description, null: false
      t.string :example, null: false
      t.integer :time_limit, null: false
      t.string :output_type, null: false
      t.string :output_description, null: false
      t.timestamps
    end
  end
end
