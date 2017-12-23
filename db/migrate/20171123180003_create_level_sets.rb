class CreateLevelSets < ActiveRecord::Migration[5.1]
  def change
  create_table :level_sets do |t|
    t.string :name, null: false, unique: true
    t.integer :order, null: false
    t.string :image_url, null: false
    t.timestamps
  end
  end
end
