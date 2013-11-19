'use strict';

/* Controllers */
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