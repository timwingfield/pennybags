_.templateSettings = {
  interpolate: /\{\{\=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g
};

var Property = Backbone.Model.extend({});

var Properties = Backbone.Collection.extend({
  model: Property,
  url: '/properties'
});

var PropertiesView = Backbone.View.extend({

  initialize: function(){
    self = this;
    this.collection = new Properties();
    this.collection.on('reset', this.render, this);

    Backbone.on('propertyDetails:load', this.loadPropertyDetails);

    this.collection.fetch({reset: true});

    this.propertyDetails = new PropertyDetailsView({el: '.property-details'});
  },

  render: function(){
    this.collection.each(function(m){
      v = new SmallCardView({model: m});
      $(self.el).append(v.render().el);
    });
    
    return this;
  },

  loadPropertyDetails: function(property) {
    // alert(property.get('name'));
    console.log(self.propertyDetails);
    self.propertyDetails.model = property;
    self.propertyDetails.render();
  }
});

var SmallCardView = Backbone.View.extend({
  template: _.template($("#small-card").html()),

  events: {
    'click' : 'loadPropertyDetails'
  },

  render: function(){
    html = this.template(this.model.toJSON());
    $(this.el).append(html); 
    return this;
  },

  loadPropertyDetails: function(){
    Backbone.trigger('propertyDetails:load', this.model);
  }
});

var PropertyDetailsView = Backbone.View.extend({
  template: _.template($("#property-details").html()),

  render: function(){
    html = this.template(this.model.toJSON());
    $(this.el).html(html); 
    return this;
  }
});
