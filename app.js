// Declare app level module which depends on views, and components
var myHealthApp = angular.module('myHealthApp', ['ui.router', 'ngCookies'])
myHealthApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider.state('login', {
		url: '/login',
		templateUrl: '/modules/login/login.html',
		controller: 'loginController',
		auth: false
	})
	.state('dashboard', {
		url: '/dashboard',
		templateUrl: '/modules/dashboard/dashboard.html',
		controller: 'dashboardController',
		auth: true
	})
	.state('/', {
		url: '/',
		templateUrl: '/modules/login/redirect.html',
		controller: 'loginController',
		auth: false
	})

	$urlRouterProvider.otherwise('/login')

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

})
.run(['$rootScope', '$location', 'Global', function($rootScope, $location, Global) {

	// check whether the user is authenticated to view the page whenever the url changes
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

		var token = Global.getData()

		if(toState.auth == true && token == null) { // redirect to login page if the required path needs authenticated users
		    $location.path('/login')
		}
		else if(toState.auth == false && token != null) { // redirect to dashboard if the user is authenticated and tries to access the login page
			$location.path('/dashboard')
		}

	})

}]).config(['$qProvider', function ($qProvider) {

	// manually disable unhandled rejections
	$qProvider.errorOnUnhandledRejections(false);

}]);