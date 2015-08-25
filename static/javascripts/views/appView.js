define(['backbone','underscore','/js/collections/nbaCollection.js','/js/routers/nbaRouter.js','/js/models/nbaModel.js','/js/views/nbaView.js'], function(Backbone, _, nbaCollection, nbaModel, nbaRouter, nbaView){
	var Collection = new nbaCollection();
	var appView = Backbone.View.extend({
		el: 'body',
		initialize: function(){
			_.bindAll(this,'addOne','addAll','reset');
			// Collection.bind('add',this.addOne);
                		Collection.bind('reset',this.reset);
		             // Collection.bind('all', this.render);
		             Collection.fetch({reset:true});
		             this.loadRouter = true;
		},
		events: {
			'click .tab a': 'showPlayers'
		},
		addOne: function(one){
			var view = new nbaView({model: one});
			$('.left').append(view.render().el);
		},
		reset: function(){
			this.addAll();
			if(this.loadRouter){
				this.loadRouter = false;
				// this.router_app = new nbaRouter();
				Backbone.history.start({pustState: true});
			}
		},
		addAll: function(){
			Collection.each(this.addOne);
		},
		render: function(){
			console.log('all~~');
		},
		renderPlay: function(id){
			var playid = typeof(id) == 'object'?obj: Collection.get(id);
			if(playid === undefined){
				playid = new nbaModel({id: id});
				var self = this;
				playid.fetch({success: function(resp){
					self.renderPlay(resp);
				}});
				return;
			}
			var views = new nbaView({model: playid});   
			console.log(views);
			$('.right').html(views.player_render().el);
			$('.playInfo').show();
			this.router_app.navigate("play/"+playid.id);
		},
		showPlayers: function(e){
			var val = $(e.target).attr('id-attr');
			console.log(val);
			for(var i = 1; i < 9; i++){
				$('.item'+i).hide();
			}
			$('.tab').hide();
			$('.item'+val).show();
		}
	});

	return appView;
});