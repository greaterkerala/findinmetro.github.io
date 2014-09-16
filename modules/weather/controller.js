'use strict';

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