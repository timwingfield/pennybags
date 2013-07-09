_.templateSettings = {
  interpolate: /\{\{\=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g
};

var Player = Backbone.Model.extend({});
var Property = Backbone.Model.extend({});

var Players = Backbone.Collection.extend({
  model: Player,
  url: '/owners'
});

var Properties = Backbone.Collection.extend({
  model: Property,
  url: '/properties'
});

var PropertiesView = Backbone.View.extend({

  initialize: function(){
    _.bindAll(this, "loadPropertyDetails", "render");
    this.collection = new Properties();

    this.collection.on('reset', this.render, this);
    Backbone.on('property:selected', this.loadPropertyDetails);

    this.collection.fetch({reset: true});
  },

  render: function(){
    this.collection.each(function(m){
      v = new SmallCardView({model: m});
      $(this.el).append(v.render().el);
    }, this);
    
    return this;
  },

  loadPropertyDetails: function(property) {
    var $propertyDetails, $propertyTransfer
    $propertyDetails = $('.property-details');
    $propertyTransfer = $('.property-transfer');

    this.propertyDetails = this.propertyDetails || new PropertyDetailsView();
    this.propertyDetails.model = property;

    $propertyDetails.html(this.propertyDetails.render().el);

    $propertyTransfer.html('');

    if(property.get('owner_id') === 1){
      this.propertyTransfer = this.propertyTransfer || new PropertyTransferView();
      this.propertyTransfer.model = property;
      $propertyTransfer.html(this.propertyTransfer.render().el);
    }
  }
});

var SmallCardView = Backbone.View.extend({
  template: _.template($("#small-card").html()),

  events: {
    'click' : 'selectProperty'
  },

  render: function(){
    html = this.template(this.model.toJSON());
    $(this.el).append(html); 
    return this;
  },

  selectProperty: function(){
    Backbone.trigger('property:selected', this.model);
  }
});

var PropertyDetailsView = Backbone.View.extend({
  template: _.template($("#property-details").html()),

  render: function(){
    html = this.template(this.model.toJSON());
    this.$el.html(html); 
    return this;
  }
});

var PropertyTransferView = Backbone.View.extend({
  template: _.template($("#property-transfer").html()),

  events: {
    'click .player' : 'selectPlayer'
  },

  selectPlayer: function(e){
    console.log($(e.currentTarget).data('player-id'));
  },

  render: function() {
    html = this.template();
    $(this.el).html(html);
    return this;
  }
});
