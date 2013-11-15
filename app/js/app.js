'use strict';


// Declare app level module which depends on filters, and services
var dyoLayoff = angular.module('dyoLayoff', [
  'ngRoute',
  'dyoLayoff.filters',
  'dyoLayoff.services',
  'dyoLayoff.directives'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/landing.html', controller: 'LandingController'});
    $routeProvider.when('/admin', {templateUrl: 'partials/auth.html', controller: 'AuthController'});
    $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'DashController'});
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
