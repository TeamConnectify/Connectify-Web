!function(){"use strict";function e(e,o){function t(){return s?(console.log("localStorage is supported."),!0):(console.log("localStorage not supported, make sure you have the $cookies supported."),!1)}function r(o,t){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),null===window.localStorage.getItem(o)?e.localStorage&&e.localStorage.setItem(o,angular.toJson(t)):void console.warn("localStorage with the name "+o+" already exists. Please pick another name.")}function n(o){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage.getItem(o)?e.localStorage.getItem(o):e.localStorage&&angular.fromJson(e.localStorage.getItem(o))}function a(o,t){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.setItem(o,angular.toJson(t))}function l(o){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.removeItem(o)}function c(){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.clear()}function u(){return e.localStorage}var i="undefined"==typeof window.localStorage?void 0:window.localStorage,s=!(void 0===typeof i||void 0===typeof window.JSON);return angular.element(e).on("storage",function(e,t){e.key===t&&o.$apply()}),{set:r,get:n,update:a,remove:l,removeAll:c,list:u,exists:t}}angular.module("ConnectifyWeb").factory("LocalStorage",["$window","$rootScope",e])}(),function(){"use strict";function e(e,o,t){function r(r,n,a,l){var c=o.defer();return e({method:r,url:t.API_URL+n,params:a,data:l}).then(function(e){e.config||console.log("Server error occured."),c.resolve(e)},function(e){c.reject(e)}),c.promise}var n={query:r};return n}angular.module("ConnectifyWeb").factory("QueryService",["$http","$q","CONSTANTS",e])}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"components/directives/main-nav.html"};return e}angular.module("ConnectifyWeb").directive("mainNav",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"components/directives/responsive-nav.html",link:function(e,o,t,r){o.on("click",function(e){$(".responsive-wrapper").slideToggle(150,"swing"),e.preventDefault()})}};return e}angular.module("ConnectifyWeb").directive("responsiveNav",e)}();