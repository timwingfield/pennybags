_.templateSettings = {
  interpolate: /\{\{\=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g
};

var Property = Backbone.Model.extend({});

var Properties = Backbone.Collection.extend({
  model: Property,
  url: '/properties'
});
