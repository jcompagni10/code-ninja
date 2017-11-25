class CreateBots < ActiveRecord::Migration[5.1]
  def change
    create_table :bots do |t|
      t.integer :task_id, null: false
      t.string :name, null: false, unique: true
      t.string :description, null: false
      t.integer :order, null: false
      t.integer :time, null: false
      t.integer :wins, null: false, default: 0
      t.integer :losses, null: false, default: 0
      t.integer :ties, null: false, default: 0
      t.string :image_url, null: false

      t.timestamps
    end
  end
end
