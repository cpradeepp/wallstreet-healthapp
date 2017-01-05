//Global service for global variables
angular.module('myHealthApp').factory('Global', ['$cookies', function($cookies) {
  var _this = this;

  _this.token = ($cookies.get('myHealthAppToken')) ? JSON.parse($cookies.get('myHealthAppToken')) : null;

  _this._data = {
     token: _this.token,

     setData: function(token) {
         _this.token = _this.token = window.token = token;

          $cookies.put('myHealthAppToken', JSON.stringify(_this.token))
      },
      getData: function() {
        if($cookies.get('myHealthAppToken')){
          var data = JSON.parse($cookies.get('myHealthAppToken'))
          return data
        }
        else
          return null
      },
      removeData: function(){
        $cookies.remove('myHealthAppToken')

        _this.token = null
        
        return _this.token
      }
  };

  return _this._data;

}])