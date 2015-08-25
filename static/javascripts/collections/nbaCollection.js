define(['backbone', '/js/models/nbaModel.js'], function(Backbone, nbaModel){
	var nbaCollection = Backbone.Collection.extend({
		model: nbaModel,
		url: '/nba/getInfo1'
	});

	return nbaCollection;
});