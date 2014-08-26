'use strict';

/* Controllers */

angular.module('myapp.controllers', [])
.controller('Home', ['$scope', function($scope) {
	$scope.news = [];
	function render(posts){
		$scope.$apply(function(){
			$scope.news = posts.feed.entries;
			//alert("rendering" + JSON.stringify($scope.news));			
		});
	}
	window.Feed({
		url: 'http://feeds.feedburner.com/mathrubhumi',
		limit: 0,
		callback: render
	});
}])
.controller('LocalNews', ['$scope', '$http', function($scope, $http) {
	$scope.news = [];
	$scope.setFeedUrl = function(city){

		var feedurl = "https://news.google.com/news/feeds?pz=1&cf=all&ned=in&hl=en&geo="+ city +"&output=rss";

		 $http.jsonp(feedurl).
		    success(function(data, status, headers, config) {
		    	var myJsonObject=xml2json.parser(data);
		    	$scope.news = myJsonObject.rss.channel.item;
		    }).
		    error(function(data, status, headers, config) {
		    	alert(data);
		    });
		};

	$scope.setFeedUrl("Thiruvananthapuram");
}]);
