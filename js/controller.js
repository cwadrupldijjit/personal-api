app.controller('MainController', ['MainService', '$timeout', function(MainService, $timeout) {
	var vm = this;
	
	vm.meData = {};
	
	vm.getData = function(param) {
		MainService.getData(param).then(function(data) {
			
			if (param.split('hobbies')[0] == '') {
				param = 'hobbies';
			}
			
			switch (param)
			{ 
				case 'name': vm.meData.name = data; break;
				case 'location': vm.meData.location = data; break;
				case 'hobbies': vm.meData.hobbies = data; break;
				case 'occupations': vm.meData.occupations = data; break;
				case 'occupations/latest': vm.meData.latestJob = data; break;
			}
		
			// var test = param.split('hobbies');
			// if (param.split('hobbies')[0] === '') {
			// 	vm.meData.hobbies = data;
			// }
		})
	};
	
	vm.updateData = function(field) {
		switch(field)
		{
			case 'name': 
				if (vm.newName) {
					MainService.postData(field, vm.newName);
					$timeout(function() {
						vm.newName = '';
					}, 50);
				} else {
					alert('The new name field wasn\'t filled out.  Fill it out before you submit it.');
				}
				break;
			case 'location': 
				if (vm.newLocation) {
					MainService.postData(field, vm.newLocation);
					$timeout(function() {
						vm.newLocation = '';
					}, 50);
				} else {
					alert('The new location field wasn\'t filled out.  Fill it out before you submit it.');
				}
				break;
			case 'hobbies': 
				if (vm.newHobby) {
					MainService.postData(field, vm.newHobby);
					$timeout(function() {
						vm.newHobby = '';
					}, 50);
				} else {
					alert('The new hobby field wasn\'t filled out.  Fill it out before you submit it.');
				}
				break;
			case 'occupations': 
				if   (vm.newJob.company && vm.newJob.department 
					  && vm.newJob.position && vm.newJob.beginDate) {
					MainService.postData(field, vm.newJob);
					$timeout(function() {
						vm.newJob = {};
					}, 50);
				} else {
					alert('The New Job Data fields haven\'t been filled out entirely.  Do that before you can submit the form');
				}
				break;
		}
	};
}]);