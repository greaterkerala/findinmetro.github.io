//https://gdata.youtube.com/feeds/api/videos?q=kerala%20travel&orderby=viewCount&max-results=10&alt=json
'use strict';

function Staticyoutube ($scope, $http) {
	$scope.data = [];


	$scope.init = function() {
		$http.get($scope.module.Data.url)
		.success(function (data) {
			$scope.data = data;
		})
		.error(function (data, status, headers, config) {
			alert("Failed to load videos");
		});
	};
};