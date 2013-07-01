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
    _.bindAll(this, 'render');
    this.collection = new Properties();
    this.collection.on('reset', this.render, this);

    this.collection.fetch({reset: true}).done(function(){
      console.log(this);
    });
    console.log('init');
  },

  render: function(){
    console.log('rendering...');
    this.collection.each(function(m){
      $(this.el).append('<p>' + m.get('name') + '</p>');        
    });
  }
});

var SmallCardView = Backbone.View.extend({
  template: _.template($("#small-card").html()),

  render: function(){
    p = new Backbone.Model({id: 1, name: "something", property_group: "dark_blue"});
    html = this.template(p.toJSON());
    console.log(html);
    $(this.el).append(html); 
  }
});

var PropertyDetailsView = Backbone.View.extend({
  template: _.template($("#property-details").html()),
});
