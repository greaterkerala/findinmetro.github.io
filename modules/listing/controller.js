'use strict';

function Listing ($scope, $http) {
	$scope.list = [];



	$scope.init = function() {
		$http.get($scope.module.Data.url)
		.success(function (data) {
			$scope.list = data.list;
		})
		.error(function (data, status, headers, config) {
			alert("Failed to load " + $scope.module.Title);
		});
	};
};