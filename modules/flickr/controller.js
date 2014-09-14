'use strict';

function Flickr ($scope) {
	$scope.news = [];
	$scope.images = [];
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
			for (var i = result.feed.entries.length - 1; i >= 0; i--) {
				var jsonstructure = xml2json.parser((result.feed.entries[i].content));
				$scope.images.push(jsonstructure.p[1].a.img);
			};
			
			$scope.news = result.feed.entries;
			$scope.$apply();
		});


	}
};