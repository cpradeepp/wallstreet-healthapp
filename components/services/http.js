angular.module('myHealthApp').factory('restApi', ['$cookies', '$http', 'Global', function($cookies, $http, Global) {

	var _this = this,
		token = Global.getData(),
		header = {
			Authorization: "Bearer " + token
		}

	_this._data = {
		getDiskHealthData: function() {
			return $http({
				method: 'GET',
				url: 'https://staging-auth.wallstreetdocs.com/api/v0.1/test/health',
				headers: header
			})			
		},
		getUserInfo: function() {
			return $http({
				method: 'GET',
				url: 'https://staging-auth.wallstreetdocs.com/oauth/userinfo',
				headers: header
			})
		}
	}

	return _this._data;

}])