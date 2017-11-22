class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true, index: true
      t.string :email, null: false, unique: true
      t.string :img_url, null: false
      t.integer :score, null: false, default: 0
      t.string :session_token, null: false, unique: true, index: true
      t.string :password_digest, null: false
      t.timestamps
    end
  end
end
