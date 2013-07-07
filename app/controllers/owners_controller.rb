class OwnersController < ApplicationController
  def index
    render :json => Owner.all.map { |o| { id: o.id, name: o.name, slug: o.slug } }
  end
end
