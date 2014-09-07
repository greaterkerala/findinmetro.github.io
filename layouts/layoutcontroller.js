'use strict';

function LayoutCtrl ($scope, $location, Utilities, metadataService) {

	$scope.metadata = [];
	
	$scope.initlayout = function() {
		$scope.metadata = metadataService.getMetaData($location.path());
	}
}