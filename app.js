'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
	'ngRoute',
	'ngAnimate',
	'myApp.version'
	]);
myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'layouts/home/homelayout.html'
	})
	$routeProvider.when('/view1', {
		templateUrl: 'layouts/home/homelayout.html'
	})
	$routeProvider.when('/view2', {
		templateUrl: 'layouts/home/homelayout.html'
	})
	$routeProvider.otherwise({redirectTo: '/view1'});
}]);
