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
}]);
