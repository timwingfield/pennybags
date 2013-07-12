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
    this.collection = new Properties();

    this.collection.on('reset', this.render, this);

    this.collection.fetch({reset: true});
  },

  render: function(){
    // loop over collection
    return this;
  }
});
