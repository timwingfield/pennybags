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
    _.bindAll(this, "render");
    this.collection = new Properties();

    this.collection.on('reset', this.render, this);

    this.collection.fetch({reset: true});
  },

  render: function(){
    this.collection.each(function(m){
      v = new SmallCardView({model: m});
      $(this.el).append(v.render().el);
    }, this);

    return this;
  }
});

var SmallCardView = Backbone.View.extend({
  template: _.template($("#small-card").html()),

  render: function(){
    html = this.template(this.model.toJSON());
    $(this.el).append(html); 
    return this;
  }
});
