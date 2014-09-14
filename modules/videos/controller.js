'use strict';

function Videos ($scope, $http) {
	$scope.videos = [];


	$scope.init = function() {
		$http.get($scope.module.Data.url)
		.success(function (data) {
			$scope.videos = data;
			$scope.$apply();
		})
		.error(function (data, status, headers, config) {
			alert("Failed to load videos");
		});
	};
};