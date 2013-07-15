class PropertiesController < ApplicationController
  def index
    render :json => Property.includes('owner').all.as_json(:include => :owner)
  end
end
