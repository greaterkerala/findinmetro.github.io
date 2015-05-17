'use strict';

function LayoutCtrl ($scope, $http, $location, Utilities, metadataService) {
	$scope.metadata = [];

	
	$scope.initlayout = function() {

		$http.get("metadata"+ $location.path() +".js")
		.success(function (data) {
			$scope.metadata  = data;
		})
		.error(function (data, status, headers, config) {
			alert("Failed to load content for " + $location.path() );
		});

	}
}