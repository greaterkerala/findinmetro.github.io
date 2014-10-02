//https://gdata.youtube.com/feeds/api/videos?q=kerala%20travel&orderby=viewCount&max-results=10&alt=json
'use strict';

function Dynamicyoutube ($scope, $http) {
	$scope.data = [];

	$scope.buildyoutubeurl = function(input){
		var splitarray = input.split("/");
		return "http://www.youtube.com/embed/"  + splitarray[splitarray.length-1];
	};

	$scope.init = function() {
		$http.get($scope.module.Data.url)
		.success(function (data) {
			$scope.data = data.feed.entry;
		})
		.error(function (data, status, headers, config) {
			alert("Failed to load '" + $scope.module.Title + "'");
		});
	};
};