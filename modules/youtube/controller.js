'use strict';

function Youtube ($scope) {
	$scope.news = [];
	$scope.url = null;

	$scope.init = function() {
		$scope.setFeedUrl($scope.module.Data.url);
	};
	$scope.setFeedUrl = function(url){
		$scope.url = url;
		//var feedurl = "https://news.google.com/news/feeds?pz=1&cf=all&ned=in&hl=en&geo="+ url +"&output=rss";
		var feedurl = url;
		var feed = new google.feeds.Feed(feedurl);
		feed.setNumEntries($scope.module.Data.limit);
		feed.load(function(result){
			$scope.news = result.feed.entries;
			$scope.$apply();
		});


	}
};