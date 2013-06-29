class AddMortgageValueToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :mortgage_value, :integer
  end
end
