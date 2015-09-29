app.service('MainService', ['$http', '$q', function($http, $q) {
	var serv = this;
	var rootUrl = 'http://localhost:8794/'
	
	serv.getData = function(param) {
		var deferred = $q.defer();
		
		$http({
			method: 'GET',
			url: rootUrl + param
		}).then(function(response) {
			deferred.resolve(response.data);
		});
		
		return deferred.promise;
	}
	
	serv.postData = function(field, change) {
		var changeObj = { change: change };
		
		$http({
			method: 'POST',
			url: rootUrl + field,
			data: changeObj
		});
	};
}]);