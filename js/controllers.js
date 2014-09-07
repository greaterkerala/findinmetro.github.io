'use strict';

/* Controllers */

angular.module('myapp.controllers', [])
.controller('Home', ['$scope', function($scope) {
	$scope.news = [];
	function render(posts){
		$scope.$apply(function(){
			$scope.news = posts.feed.entries;
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

	$scope.urlAvailable = function(){
		return ($scope.url == "");
	};
	$scope.setFeedUrl = function(url){
		$scope.url = url;

		//var feedurl = "https://news.google.com/news/feeds?pz=1&cf=all&ned=in&hl=en&geo="+ url +"&output=rss";

		var feedurl = url;
		var feed = new google.feeds.Feed(feedurl);
		feed.load(function(result){
			$scope.news = result.feed.entries;
			$scope.$apply();
		});

	};

}]).controller('newspaper', ['$scope', '$http', function($scope, $http) {
	$scope.newspapers = [
	{title: "Aksharanadam"},
	{title: "Suprabhatham"},
	{title: "Chandrika"},
	{title: "Deepika"},
	{title: "Deshabhimani"},
	{title: "Janayugom"},
	{title: "Janmabhumi"},
	{title: "Kerala Bhooshanam"},
	{title: "Kerala Kaumudi"},
	{title: "Malayala Manorama"},
	{title: "Mangalam"},
	{title: "Mathrubhumi"},
	{title: "Metro Vaartha"},
	{title: "Rashtra Deepika"},
	{title: "Varthamanam"}
	];

}]);
