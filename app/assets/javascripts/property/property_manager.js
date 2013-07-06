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
    this.propertyDetails = new PropertyDetailsView({el: '.property-details'});

    this.collection.on('reset', this.render, this);
    Backbone.on('propertyDetails:load', this.loadPropertyDetails);

    this.collection.fetch({reset: true});
  },

  render: function(){
    this.collection.each(function(m){
      v = new SmallCardView({model: m});
      $(self.el).append(v.render().el);
    });
    
    return this;
  },

  loadPropertyDetails: function(property) {
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
    this.$el.html(html); 



    transfer = new PropertyTransferView({el: '.property-transfer'});
    transfer.render();

    return this;
  }
});

var PropertyTransferView = Backbone.View.extend({
  template: _.template($("#property-transfer").html()),

  render: function() {
    html = this.template();
    $(this.el).html(html);
    return this;
  }
});
