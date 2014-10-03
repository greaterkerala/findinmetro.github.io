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
};'use strict';

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
};'use strict';

function HtmlCtrl ($scope) {
}'use strict';

function Listing ($scope, $http) {
	$scope.list = [];


	$scope.init = function() {
		$http.get($scope.module.Data.url)
		.success(function (data) {
			$scope.list = data.list;
		})
		.error(function (data, status, headers, config) {
			alert("Failed to load " + $scope.module.Title);
		});
	};
};
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
};'use strict';

function RSSCtrl ($scope) {
	$scope.news = [];
	$scope.url = null;

	$scope.init = function() {
		$scope.setFeedUrl($scope.module.Data);
	};
	$scope.getreadabledate = function  (argument) {
		return  argument + " - <b>"+moment(argument).fromNow() + "</b> "; // 3 years ago
	}
	$scope.setFeedUrl = function(url){
		$scope.url = url;
		//var feedurl = "https://news.google.com/news/feeds?pz=1&cf=all&ned=in&hl=en&geo="+ url +"&output=rss";
		var feedurl = url;
		var feed = new google.feeds.Feed(feedurl);
		feed.setNumEntries($scope.module.limit);
		feed.load(function(result){
			$scope.news = result.feed.entries;
			$scope.$apply();
		});



	}
};//https://gdata.youtube.com/feeds/api/videos?q=kerala%20travel&orderby=viewCount&max-results=10&alt=json
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
};'use strict';

function Weather ($scope, $http) {

	//http://api.openweathermap.org/data/2.5/weather?q=calicut&units=imperial&cnt=2

	$scope.init = function() {
		

		var mapOptions = {
			zoom: 7,
			
			
			//49.265984,-123.127491
			//center: new google.maps.LatLng(10.5415985,76.1302717)
			center: new google.maps.LatLng($scope.module.Data.lat, $scope.module.Data.lon)
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

		var weatherLayer = new google.maps.weather.WeatherLayer({
			temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
		});
		weatherLayer.setMap(map);

		var cloudLayer = new google.maps.weather.CloudLayer();
		cloudLayer.setMap(map);
	};
};