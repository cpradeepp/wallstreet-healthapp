angular.module('myHealthApp').controller('loginController', function($scope, Global, $window, $location){

	$scope.global = Global

	$scope.login = function() {

		$window.location.href  = 'https://staging-auth.wallstreetdocs.com/oauth/authorize?client_id=coding_test&response_type=token&redirect_uri=http://localhost:3000'

	}

	$scope.initRedirect = function() {
		var responseToken = $location.absUrl()

		var regex = /[#&]([^=#]+)=([^&#]*)/g, // regex to match only the text after the hash (#)
        queryParams = {},
        match;

	    while(match = regex.exec(responseToken)) {
	        queryParams[match[1]] = match[2];
	    }

	    if(queryParams.access_token && queryParams.access_token != ''){ // if access token exists and not empty
	    	Global.setData(queryParams.access_token)
	    	window.location.href = '/dashboard'
	    }
	    else
	    	window.location.href = '/login' 
	}

})