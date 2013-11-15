'use strict';

/* Controllers */
/*
angular.module('dyoLayoff.controllers', []).
  controller('LandingController', [function($scope) {

  }])
  .controller('AuthController', [function($scope) {
        $scope.authenticate = function() {
            this.testtext = "Form submitted";
            console.log("Authenticating now!");
            var creds = {email: this.email, password: this.password};
            $http.post('/authenticate', creds).
                success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                }).
                error(function(data, status, headers, config) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                });
        };
  }]);*/
dyoLayoff.controller('LandingController', function($scope) {
    
});

dyoLayoff.controller('AuthController', function($scope, $http, $location){
    $scope.authenticate = function() {
            var creds = JSON.stringify({email: this.email, password: this.password});
            $http.post('/authenticate', creds).
                success(function(data, status, headers, config) {
                    console.log("Successful!");
                    $location.path('/dashboard');
                }).
                error(function(data, status, headers, config) {
                    console.log("Unsuccessful :(");
                    $scope.errors = true;
                    $scope.invalid_email = data.invalid_email;
                    $scope.invalid_password = data.invalid_password;
                });
        };
});

dyoLayoff.controller('DashController', function($scope) {
    
});