'use strict';

/* Filters */

angular.module('myapp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]).filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
}).filter("decode",function(){
    return function(str){         
      var el = document.createElement("div");
      el.innerHTML = str;
      str =   el.textContent || el.innerText;
      return str;        
    }
});;
