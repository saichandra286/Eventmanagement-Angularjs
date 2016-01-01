angular.module('Eventmang')
.directive('highlight', function(){
	return {
		restrict:'A',
		replace:true,
		template:'<b>{{name}}<span class="label label-info">Hot!</span></b>',
		link: function(scope, elem, attrs) {
			scope.name = attrs.evenam;
		}
	}
})
