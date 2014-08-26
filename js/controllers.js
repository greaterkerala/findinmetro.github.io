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
	$scope.url = null;
	$scope.setFeedUrl = function(url){
		$scope.url = url;

		$scope.urlAvailable = function(){
			return ($scope.url == "");
		};
		//https://news.google.com/news/feeds?pz=1&cf=all&ned=in&hl=en&geo=Trivandrum&output=rss
		var feedurl = "https://news.google.com/news/feeds?pz=1&cf=all&ned=in&hl=en&geo="+ url +"&output=rss";
		//feedurl = "http://xml.feedcat.net/896641";

		var feed = new google.feeds.Feed(feedurl);
		feed.load(function(result){
			$scope.news = result.feed.entries;
		});

	};

}]);
