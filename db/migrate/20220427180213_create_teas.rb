class CreateTeas < ActiveRecord::Migration[6.1]
  def change
    create_table :teas do |t|
      t.string :name
      t.string :image
      t.string :description
      t.string :ingredients
      t.string :shop
      t.string :origin
      t.float :origin_latitude
      t.float :origin_longitude
      t.timestamps
    end
  end
end
