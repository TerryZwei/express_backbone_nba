define(['backbone'], function(Backbone){
	var appView = {};
	var nbaRouter = Backbone.Router.extend({
		initialize: function(appview){
			appView = appview;
		},
		routes: {
			'home': 'home',
			'play/:id': 'showPlayInfo'
		},
		home: function(){
			$('.home').hide();
                		$('.playInfo').hide();
                		for(var i = 1; i < 9; i++){
                    			$('.item'+i).hide();
                		}
                		$('.tab').show();
		},
		showPlayInfo: function(id){
			for(var i = 1; i < 9; i++){
				$('.item'+i).hide();
		             }
		             $('.home').show();
		             appView.renderPlay(id);
		},
	});

	return nbaRouter;
});