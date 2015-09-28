app.controller('MainController', ['MainService', function(MainService) {
	var vm = this;
	
	vm.meData = {};
	
	vm.getData = function(param) {
		MainService.getName(param).then(function(data) {
			switch (param)
			{ 
				case 'name': vm.meData.name = data; break;
				case 'location': vm.meData.location = data; break;
				case 'hobbies': vm.meData.hobbies = data; break;
				case 'occupations': vm.meData.occupations = data; break;
				case 'occupations/latest': vm.meData.latestJob = data; break;
			}
		})
	}
}]);