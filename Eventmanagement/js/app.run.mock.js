angular.module('Eventmang')
.run(function($httpBackend) {
	$httpBackend.whenGET(/views\/.*/).passThrough();
	$httpBackend.whenGET(/js\/.*/).passThrough();
	$httpBackend.whenGET(/css\/.*/).passThrough();

	var events;
	events = [
	{	"id":"1",
		"name":"Chandu",
		"desc":"hapy weekend",
		"category":"music",
		"email":"chandu@gmai.com",
		"location":"guntur",
		"date":"2015-12-12",
		"speceve":"true"
	},

	{
		"id":"2",
		"name":"Aruna",
		"desc":"very intelligent",
		"category":"movie",
		"email":"Aruna34@gmai.com",
		"location":"hyd",
		"date":"2015-12-12",
		"speceve":"false"
	},

	{
		"id":"3",
		"name":"mahitha",
		"desc":"pretty sexy girl",
		"category":"party",
		"email":"mahitha@gmai.com",
		"location":"mumbai",
		"date":"2015-12-12",
		"speceve":"true"
	},

	{
		"id":"4",
		"name":"dolly",
		"desc":"cute baby dool",
		"category":"music",
		"email":"dolly@gmai.com",
		"location":"guntur",
		"date":"2015-12-12",
		"speceve":"false"
	},

	{
		"id":"5",
		"name":"karishma",
		"desc":"very irritating girl",
		"category":"wedding planer",
		"email":"karishma@gmai.com",
		"location":"guntur",
		"date":"2015-12-12",
		"speceve":"true"
	}];

	$httpBackend.whenGET('api/events').respond(events);

	$httpBackend.whenPOST('api/events/update').respond(function(method, url, data) {
		var evt = angular.fromJson(data);
		for(i=0; i<events.length; i++) {
			if(events[i].id == evt.id){
				events[i] = evt;
			}
		}
		return [200, {'events': events}, {}]
	});


	$httpBackend.whenPOST('api/events/new').respond(function(method, url, data){
		var evt = angular.fromJson(data);
		evt.id = events.length + 1;
		events.push(evt);
		return [200, {'addEventresult': true}, {}]
	});

	$httpBackend.whenPOST('api/events/delete').respond(function(method, url, data){
		var eveindx = angular.fromJson(data);
		for (i=0; i<events.length; i++){
			if(events[i].id === eveindx.id){
				events.splice(i, 1);
			}
		}
		return [200, {'events': events}, {}]	
	})
})
