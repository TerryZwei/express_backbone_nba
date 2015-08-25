require.config({
	baseUrl: '/js/libs',

	paths: {
		jquery: 'jquery.min',
		underscore: 'underscore-min',
		backbone: 'backbone-min'
	},

	shim: {
		underscore: {
			exports: '_'
		},

		backbone: {
			deps: ['underscore','jquery'],
			exports: 'Backbone'
		}
	}
});

require(['/js/views/appView.js', '/js/routers/nbaRouter.js'], function(appView, nbaRouter){
	var appView = new appView();
	new nbaRouter(appView);
});