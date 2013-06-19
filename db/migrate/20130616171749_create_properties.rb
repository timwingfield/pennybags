class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.string :name
      t.integer :owner_id
      t.boolean :is_mortgaged
      t.integer :number_of_houses
      t.boolean :has_hotel
      t.string :property_group

      t.timestamps
    end
  end
end
