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

            var documentEl = angular.element(document);

            $timeout(function() {
              // var runSetup = function() {
                var fixedHeaders = document.querySelectorAll("th");
                var fixedCols = document.querySelectorAll(".fixed-col");
                var fixedColHeight = fixedCols[0].clientHeight;
                var mainHeader = document.getElementById("main-header");
                var latestKnownScrollX = 0;
                var latestKnownScrollY = 0;
                var ticking = false;
                var headerHeight = mainHeader.clientHeight;
                var fixedHeader = document.getElementById("fixed-header");
                var fixedHeaderHeight = fixedHeader.clientHeight;
                var table = document.getElementById("scroll-table");

                table.style.margin = (headerHeight + fixedHeader.clientHeight) + "px 0 0 0";
                fixedHeader.style.top = headerHeight + "px";
                for( var i=0; i < fixedCols.length; i++ ) {
                  fixedCols[i].style.top = headerHeight + fixedHeaderHeight + (fixedColHeight*i) + "px";
                }
              // } 

              // runSetup();
              // mainHeader = document.getElementById("main-header");
              // fixedCols = document.querySelectorAll(".fixed-col");
              // fixedHeader = document.getElementById("fixed-header");
              // fixedHeaderHeight = fixedHeader.clientHeight;
              // fixedColHeight = fixedCols[0].clientHeight;
              
              var onScroll = function() {
                latestKnownScrollX = document.body.scrollLeft;
                latestKnownScrollY = document.body.scrollTop;
                requestTick();
              }
              // Check for paint
              function requestTick() {
                if (!ticking) {
                  requestAnimationFrame(update);
                }
                ticking = true;
              }




              // Functions for scroll
              var update = function() {
                console.log("scrolling");
                ticking = false;
                var currentScrollY = latestKnownScrollY,
                    currentScrollX = latestKnownScrollX,
                     
                    //scrollHeader = currentScrollY - fromTop + "px",
                    scrollCol = currentScrollX + "px";

                if (currentScrollY > headerHeight) {
                  fixedHeader.style.top = 0;
                } else {
                  fixedHeader.style.top = headerHeight - currentScrollY;
                  mainHeader.style.top = -currentScrollY;
                }
                fixedHeader.style.left = -currentScrollX;

                for ( var i=0; i < fixedCols.length; i++ ) {
                  console.log(headerHeight + fixedHeaderHeight + currentScrollY + (fixedColHeight*i) + "px");
                  fixedCols[i].style.top = headerHeight + fixedHeaderHeight - currentScrollY + (fixedColHeight*i) + "px";
                }

              };





              angular.element($window).bind("scroll", onScroll);
              //angular.element($window).bind("resize", runSetup);

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