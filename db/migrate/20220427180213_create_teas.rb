class CreateTeas < ActiveRecord::Migration[6.1]
  def change
    create_table :teas do |t|
      t.string :name
      t.string :image
      t.string :description
      t.string :ingredients
      t.string :origin
      t.string :shop

      t.timestamps
    end
  end
end
