'use strict';

angular.module('myApp.version.interpolate-filter', [])
.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
})
.filter('trusted', function ($sce) {
	return function(url) {
		return $sce.trustAsResourceUrl(url);
	};
})
.filter('interpolate', ['version', function(version) {
	return function(text) {
		return String(text).replace(/\%VERSION\%/mg, version);
	};
}])
.filter('partition', function() {
	var cache = {};
	var filter = function(arr, size) {
		if (!arr) { return; }
		var newArr = [];
		for (var i=0; i<arr.length; i+=size) {
			newArr.push(arr.slice(i, i+size));
		}
		var arrString = JSON.stringify(arr);
		var fromCache = cache[arrString+size];
		if (JSON.stringify(fromCache) === JSON.stringify(newArr)) {
			return fromCache;
		}
		cache[arrString+size] = newArr;
		return newArr;
	};
	return filter;
});
