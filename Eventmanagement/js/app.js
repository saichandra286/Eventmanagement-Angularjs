(function(){
	angular.module('Eventmang', ['ngRoute', 'ngMockE2E'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/addevent', {
			templateUrl:'views/addevent.html',
			controller: 'formcntl'
		})

		.when('/eventmang', {
			templateUrl:'views/eventmang.html',
			controller: 'mangeve',
			resolve: {
				initialData: function(eventfac){
					return eventfac.getALLEvents();
				}
			}
		})

		.otherwise({
			redirectTo:'/'
		});

	}]);

})();
