/*global angular:true */

// @codekit-prepend "angular-tooltips.js"
// @codekit-prepend "prototyping.js"
// @codekit-prepend "collaboration.js"
// @codekit-prepend "monitoring.js"
// @codekit-prepend "design.js"


angular.module('uxTools', ['ui.router', 'ngAnimate', 'uxTools.prototyping', 'uxTools.collaboration', 'uxTools.monitoring', 'uxTools.design', '720kb.tooltips'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('prototyping', {
      url: '/prototyping',
      templateUrl : '../templates/prototyping.html',
      controller: 'prototypingCtrl'
    })
    .state('hand-off', {
      url: '/hand-off',
      templateUrl : '../templates/hand-off.html',
      controller: 'collaborationCtrl'
    })
    .state('collaboration', {
      url: '/collaboration',
      templateUrl : '../templates/collaboration.html',
      controller: 'collaborationCtrl'
    })
    .state('monitoring', {
      url: '/monitoring',
      templateUrl : '../templates/monitoring.html',
      controller: 'monitoringCtrl'
    })
    .state('design', {
      url: '/',
      templateUrl : '../templates/design.html',
      controller: 'designCtrl'
    });
})

.directive('fixedTable', function($window, $timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            $timeout(function() {

              var scrollElement = document.getElementById("scroll-element");
              var fixedHeaders = document.querySelectorAll("th");
              var fixedCols = document.querySelectorAll(".fixed-col");
              var fixedColHeight = fixedCols[1].clientHeight;
              var mainHeader = document.getElementById("main-header");
              var latestKnownScrollX = 0;
              var latestKnownScrollY = 0;
              var ticking = false;
              var headerHeight = mainHeader.clientHeight;
              var fixedHeader = document.getElementById("fixed-header");
              var fixedHeaderHeight = fixedHeader.clientHeight;
              var columns = document.querySelectorAll("tr:first-of-type td");
              var table = document.getElementById("scroll-table");

              fixedHeader.style.position = "fixed"; // to keep it hidden while loading
              fixedHeader.style.top = headerHeight + "px";

              for (var i=0; i < columns.length; i++) {
                var newWidth = columns[i].offsetWidth;
                fixedHeaders[i].style.minWidth = newWidth;
              }
              
              var onScroll = function() {
                latestKnownScrollX = scrollElement.scrollLeft;
                latestKnownScrollY = scrollElement.scrollTop;
                requestTick();
              };

              function requestTick() {
                if (!ticking) {
                  requestAnimationFrame(update);
                }
                ticking = true;
              }

              var update = function() {
                ticking = false;
                var currentScrollY = latestKnownScrollY;
                var currentScrollX = latestKnownScrollX;

                fixedHeader.style.left = -currentScrollX;

                if (currentScrollY <= headerHeight) {
                  mainHeader.style.marginTop = -currentScrollY;
                  fixedHeader.style.top = headerHeight - currentScrollY;
                  fixedHeader.style.boxShadow = "";
                } else {
                  mainHeader.style.marginTop = -headerHeight;
                  fixedHeader.style.top = 0;
                  fixedHeader.style.boxShadow = "2px 2px 10px rgba(0,0,0,.15)";
                }

                if (currentScrollX > 0) {
                  for ( var i=0; i < fixedCols.length; i++ ) {
                    fixedCols[i].style.position = "fixed";
                    fixedCols[i].style.top = parseInt(fixedHeader.style.top) + fixedHeaderHeight - currentScrollY + (fixedColHeight*i);
                    fixedCols[i].style.boxShadow = "2px 0 5px rgba(0,0,0,.1)";
                  }
                } else {
                  for ( var i=0; i < fixedCols.length; i++ ) {
                    fixedCols[i].style.position = "absolute";
                    fixedCols[i].style.top = "";
                    fixedCols[i].style.boxShadow = "";
                  }
                }

              };

              loadingScreen = document.getElementById("loading-screen");
              loadingScreen.style.display = "none";

              angular.element(scrollElement).bind("scroll", onScroll);
              angular.element($window).bind("resize", function() {
                headerHeight = mainHeader.clientHeight;
                fixedHeader.style.top = headerHeight + "px";
              });

            }, 0);

        }
    };
})



.config(['tooltipsConfProvider', function configConf(tooltipsConfProvider) {
  tooltipsConfProvider.configure({
    'speed': 'fast',
    'side': 'bottom'
  });
}]);