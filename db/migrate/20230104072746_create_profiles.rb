class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :First_name
      t.string :Last_name
      t.string :gender
      t.string :bio
      t.string :profile_img

      t.timestamps
    end
  end
end
