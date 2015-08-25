define(['backbone'],function(Backbone){
	var nbaModel = Backbone.Model.extend({
		url: '/nba/getInfo1'
	});

	return nbaModel;
});