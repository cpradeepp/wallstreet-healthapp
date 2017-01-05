angular.module('myHealthApp').controller('dashboardController', function($scope, $location, Global, restApi){

	$scope.initDashboard = function() {

		restApi.getDiskHealthData() //Get Disk Health Report
		.then(function(data){
			if(data.status == 200)
				$scope.diskHealthData = JSON.stringify(data.data, null, 4)
		}, function(data){
			if(data.status == 401){
				Global.removeData()
				$location.path('/login')
			}
		})

		restApi.getUserInfo() //Get user info
		.then(function(data){
			if(data.status == 200)
				$scope.userInfo = data.data
		}, function(data){
			if(data.status == 401){
				Global.removeData()
				$location.path('/login')
			}
		})
	}

})