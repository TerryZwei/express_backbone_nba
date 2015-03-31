define(function(require){
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');

    $(function(){
        var nbaModel = Backbone.Model.extend({
            url: '/nba/getInfo1'
        });

        var nbaCollection = Backbone.Collection.extend({
            url: '/nba/getInfo1',
            model: nbaModel
        });

        var Collection = new nbaCollection();

        var initView = Backbone.View.extend({
            // tagName: 'li',
            template: _.template($('#item_template').html()),
            play_template: _.template($('#play_template').html()),
            render: function(){
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            },
            play_render: function(){
                $(this.el).html(this.play_template(this.model.toJSON()));
                return this;
            }
        });

        var appView = Backbone.View.extend({
            el: 'body',
            initialize: function(){
                _.bindAll(this,'addOne','addAll','reset');
                Collection.bind('add',this.addOne);
                Collection.bind('reset',this.reset);
                Collection.bind('all', this.render);
                Collection.fetch({reset:true});
                this.loadRouter = true;
            },

            events: {
                'click .tab a': 'showPlayers'
            },
            addOne: function(one){
                var view = new initView({model: one});
                $('.left').append(view.render().el);
            },
            reset: function(){
                this.addAll();
                if(this.loadRouter){
                    this.loadRouter = false;
                    this.router_app = new AppRouter();
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
                var views = new initView({model: playid});   
                $('.right').html(views.play_render().el);
                $('.playInfo').show();
                this.router_app.navigate("play/"+playid.id);
            },
            showPlayers: function(e){
                var val = $(e.target).attr('id-attr');
                // console.log(val);
                for(var i = 1; i < 9; i++){
                    $('.item'+i).hide();
                }
                $('.tab').hide();
                $('.item'+val).show();
            },
        });

        var AppView = new appView();

        var AppRouter = Backbone.Router.extend({
            routes:{
                "home": "home",
                "play/:id": "showPlayInfo"
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
                AppView.renderPlay(id);
            }
        });
    });
});