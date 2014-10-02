
'use strict';

function Lyrics ($scope, $http) {
	$scope.data = [];


	$scope.init = function() {
		$http.get($scope.module.Data.url)
		.success(function (data) {
			$scope.data = data.lyrics;

			alert(JSON.stringify(data.lyrics));
		})
		.error(function (data, status, headers, config) {
			alert("Failed to load '" + $scope.module.Title + "'");
		});
	};
};