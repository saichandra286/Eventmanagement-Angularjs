angular.module('Eventmang')

.controller('formcntl', ['eventfac', '$scope', function(eventfac, $scope){
	var BS;
	$scope.bothsel = BS;
	$scope.eventf = {};
	//$scope.eventf.date = new Date(2015,0,1);

	$scope.categories=[{id:1, name:'Music', group:'Main'}, {id:2, name:'Movie', group:'Main'}, {id:3, name:'Games', group:'Main'}, {id:4, name:'Business', group:'Others'}, {id:5, name:'Partys', group:'Others'}];
    
    $scope.sop = {id:1, name:'Music', group:'Main'};
	$scope.speceve ='true';	
	$scope.spectype=[{name:'Age Restricted', checked:false}, {name:'luxary', checked:false}];

	$scope.both=function(){
		if(BS){
			BS = false;
		}else{
			BS = true;
		}
		angular.forEach($scope.spectype, function(item){
			item.checked = BS;
		})

	};

	$scope.subform = function(form) {
		form.category = $scope.sop.name;
		eventfac.createEve(angular.copy(form), $scope.event).then(function(data) {
			alert("Event added successfuly");
		}, function(error) {
			alert('An error occurred' +error);
		});

	};

	}])

.controller('mangeve', ['$scope', 'eventfac', 'initialData', function($scope, eventfac, initialData){
			
			 $scope.edit = {};
			$scope.event = initialData.data;
			$scope.update = function(eve){
				eventfac.update(eve).then(function(data) {
					$scope.event = data;
				}, function(error){
					alert('an error occurred' +error);
				});
			};

			$scope.del=function(eve){
				eventfac.delEve(eve).then(function(data) {
					$scope.event = data;
				}, function(error) {
					alert('an error occurred' +error);
				});
			};

}]);
