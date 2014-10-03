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
		var retArr = [];

		if (!arr) { return; }
		if (arr.length == 0) { return retArr;}

		var nextC = 0;

		for (var i = size - 1; i >= 0; i--) {
			retArr.push([]);
		};

		for (var i = arr.length - 1; i >= 0; i--) {
			retArr[nextC].push(arr[i]);
			if(nextC  ++ == size-1){
				nextC = 0;
			}
		};

		var arrString = JSON.stringify(arr);
		var fromCache = cache[arrString+size];
		if (JSON.stringify(fromCache) === JSON.stringify(retArr)) {
			return fromCache;
		}
		cache[arrString+size] = retArr;
		return retArr;
	};
	return filter;
});
