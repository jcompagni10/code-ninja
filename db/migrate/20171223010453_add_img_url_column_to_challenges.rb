class AddImgUrlColumnToChallenges < ActiveRecord::Migration[5.1]
  def change
    add_column :challenges, :img_url, :string
  end
end
