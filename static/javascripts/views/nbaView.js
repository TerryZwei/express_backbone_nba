define(['underscore','backbone'], function(_, Backbone){
	var initView = Backbone.View.extend({
		tagName: 'div',
		template: _.template($('#item_template').html()),
		player_template: _.template($('#play_template').html()),

		render: function(){
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		},
		player_render: function(){
			$(this.el).html(this.player_template(this.model.toJSON()));
			return this;
		},
	});

	return initView;
});