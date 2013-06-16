class Property < ActiveRecord::Base
  attr_accessible :has_hotel, :is_mortgaged, :name, :number_of_houses, :owner, :property_group

  belongs_to :owner
end
