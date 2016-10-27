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

.directive('fixedHeaderTable', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            console.log('loaded');

            documentEl = angular.element(document);

            $timeout(function() {
              var fixedHeaders = document.querySelectorAll("th"),
                  fromTop = fixedHeaders[0].getBoundingClientRect().top,
                  fixedCols = document.querySelectorAll(".fixed-col"),
                  mainHeader = document.getElementById("mainHeader");
                  latestKnownScrollX = 0,
                  latestKnownScrollY = 0,
                  ticking = false;

              console.log(fromTop);

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
              var update = debounce(function {
                ticking = false;
                var currentScrollY = latestKnownScrollY,
                    currentScrollX = latestKnownScrollX,
                    scrollHeader = currentScrollY - fromTop + "px",
                    scrollCol = currentScrollX + "px";

                if (currentScrollY == 0) {
                  for( let i=0; i < fixedHeaders.length; i++ ) {
                    fixedHeaders[i].style.top = "0";
                  }
                } else if (currentScrollY > fromTop) {
                  
                  for( let i=0; i < fixedHeaders.length; i++ ) {
                    fixedHeaders[i].style.top = scrollHeader;
                  }
                }

                for( let i=0; i < fixedCols.length; i++ ) {
                  fixedCols[i].style.left = scrollCol;
                }

              }, 250);

              documentEl.bind("scroll", onScroll);

              // Returns a function, that, as long as it continues to be invoked, will not
              // be triggered. The function will be called after it stops being called for
              // N milliseconds. If `immediate` is passed, trigger the function on the
              // leading edge, instead of the trailing.
              function debounce(func, wait, immediate) {
                var timeout;
                return function() {
                  var context = this, args = arguments;
                  var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                  };
                  var callNow = immediate && !timeout;
                  clearTimeout(timeout);
                  timeout = setTimeout(later, wait);
                  if (callNow) func.apply(context, args);
                };
              };

            }, 0);

        }
    };
})

// .directive('fixedHeaderTable', function($timeout) {
//     return {
//         restrict: 'A',
//         link: function(scope, element, attrs) {

//             console.log('loaded');

//             documentEl = angular.element(document);

//             $timeout(function() {

//               var allTh = document.getElementById("test");
//               var fromTop = allTh.getBoundingClientRect().top;
//               var tableContainer = document.getElementById("table-container");
//               var leftCells = document.querySelectorAll(".leftCell");

//               documentEl.bind("scroll", function() {
//                 console.log('scrolling');
                
//                 documentScrollY = document.body.scrollTop;
//                 documentScrollX = document.body.scrollLeft;
//                 console.log(documentScrollY);

//                 var translateHead = "translate(0,"+ (documentScrollY - fromTop) +"px) translateZ(-1em)";           

//                 if (documentScrollY == 0) {
//                   allTh.style.transform = "translate(0, 0)";
//                   fromTop = allTh.getBoundingClientRect().top;
//               } else if (documentScrollY > fromTop) {
//                   allTh.style.transform = translateHead;
//               }

//               var translateCell = "translate("+documentScrollX+"px,0) translateZ(-3em)";

//               for( let i=0; i < leftCells.length; i++ ) {
//                 leftCells[i].style.transform = translateCell;
//                 document.getElementById("main-header").style.transform = translateCell;
//               }

//               });


//             }, 0);

//         }
//     };
// })


// .directive('fixedHeaderTable', function($timeout) {
//     return {
//         restrict: 'A',
//         link: function(scope, element) {
//             $timeout(function() {
//               $(element).fixedTblHdrLftCol({
//                 scroll: {
//                   height: '100%',
//                   width: '100%'
//                 }
//               });
//             }, 0);
//         }
//     };
// })

.config(['tooltipsConfProvider', function configConf(tooltipsConfProvider) {
  tooltipsConfProvider.configure({
    'speed': 'fast',
    'side': 'bottom'
  });
}]);