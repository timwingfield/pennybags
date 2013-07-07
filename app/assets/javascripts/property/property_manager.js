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
    self = this;
    this.collection = new Properties();

    this.collection.on('reset', this.render, this);
    Backbone.on('property:selected', this.loadPropertyDetails);

    this.collection.fetch({reset: true});
  },

  render: function(){
    var me = this;
    this.collection.each(function(m){
      v = new SmallCardView({model: m});
      $(me.el).append(v.render().el);
    });
    
    return this;
  },

  loadPropertyDetails: function(property) {
    var $propertyDetails, $propertyTransfer
    $propertyDetails = $('.property-details');
    $propertyTransfer = $('.property-transfer');

    self.propertyDetails = self.propertyDetails || new PropertyDetailsView();
    self.propertyDetails.model = property;

    $propertyDetails.html(self.propertyDetails.render().el);

    $propertyTransfer.html('');

    if(property.get('owner_id') === 1){
      self.propertyTransfer = self.propertyTransfer || new PropertyTransferView();
      self.propertyTransfer.model = property;
      $propertyTransfer.html(self.propertyTransfer.render().el);
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
