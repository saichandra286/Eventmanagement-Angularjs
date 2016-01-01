angular.module('Eventmang')

.factory('eventfac', ['$http','$q', function ($http, $q) {

	 var eventfac = {};

	eventfac.getALLEvents = function(){
		return $http.get('api/events');
	}; 

	eventfac.createEve = function(event){
		return $http.post('api/events/new', event);
	};

	eventfac.update = function(event){
		return $http.post('api/events/update', event).then(function(resp) {
			var data = resp.data.events;
			return data;
		}, function(error) {
			alert('error occured');
		});
	};

	eventfac.delEve = function(event){
		return $http.post('api/events/delete', event).then(function(resp) {
			var data = resp.data.events;
			return data;
		}, function(error) {
			alert('error occured');
		});		
	};

	return eventfac;

}])
