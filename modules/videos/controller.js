'use strict';

function Videos ($scope, $http) {
	$scope.data = [];


	$scope.init = function() {
		$http.get($scope.module.Data.url)
		.success(function (data) {
			$scope.data = data;
			$scope.$apply();
		})
		.error(function (data, status, headers, config) {
			alert("Failed to load videos");
		});
	};
};