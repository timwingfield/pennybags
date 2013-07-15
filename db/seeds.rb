# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Owner.create([{name: 'Bank', slug: 'bank'}, {name: 'Thimble', slug: 'thimble'}, {name: 'Battleship', slug: 'battleship'}, {name: 'Car', slug: 'car'}, {name: 'Top Hat', slug: 'tophat'}])

owners = Owner.all

Property.create(name: 'Reading Railroad', owner: owners.first, is_mortgaged: false, number_of_houses: 0, has_hotel: false, property_group: 'railroads', rent: 25, mortgage_value: 100)
Property.create(name: 'Oriental Ave', owner: owners.first, is_mortgaged: false, number_of_houses: 0, has_hotel: false, property_group: 'light_blue', rent: 6, mortgage_value: 50)
Property.create(name: 'St Charles Place', owner: owners[1], is_mortgaged: true, number_of_houses: 0, has_hotel: false, property_group: 'pink', rent: 10, mortgage_value: 70)
Property.create(name: 'Tennessee Ave', owner: owners.first, is_mortgaged: false, number_of_houses: 0, has_hotel: false, property_group: 'orange', rent: 14, mortgage_value: 90)
Property.create(name: 'Illinois Ave', owner: owners[3], is_mortgaged: false, number_of_houses: 0, has_hotel: false, property_group: 'red', rent: 20, mortgage_value: 120)
Property.create(name: 'B&O Railroad', owner: owners.last, is_mortgaged: false, number_of_houses: 0, has_hotel: false, property_group: 'railroads', rent: 25, mortgage_value: 100)
Property.create(name: 'Water Works', owner: owners.first, is_mortgaged: false, number_of_houses: 0, has_hotel: false, property_group: 'utilities', rent: 28, mortgage_value: 75)
Property.create(name: 'Marvin Gardens', owner: owners[3], is_mortgaged: false, number_of_houses: 0, has_hotel: false, property_group: 'yellow', rent: 22, mortgage_value: 140)
Property.create(name: 'Pennsylvania Ave', owner: owners.first, is_mortgaged: false, number_of_houses: 0, has_hotel: false, property_group: 'green', rent: 28, mortgage_value: 160)
Property.create(name: 'Park Place', owner: owners.first, is_mortgaged: false, number_of_houses: 0, has_hotel: false, property_group: 'dark_blue', rent: 35, mortgage_value: 175)
Property.create(name: 'Boardwalk', owner: owners[2], is_mortgaged: false, number_of_houses: 0, has_hotel: false, property_group: 'dark_blue', rent: 50, mortgage_value: 200)
