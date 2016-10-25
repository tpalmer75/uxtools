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

              var allTh = document.getElementById("test");
              var fromTop = allTh.getBoundingClientRect().top;
              var tableContainer = document.getElementById("table-container");
              var leftCells = document.querySelectorAll(".leftCell");

              documentEl.bind("scroll", function() {
                console.log('scrolling');

                //var allTh = document.querySelectorAll(".th-header");
                
                

                documentScrollY = document.body.scrollTop;
                documentScrollX = document.body.scrollLeft;
                console.log(documentScrollY);

                var translateHead = "translate(0,"+ (documentScrollY - fromTop) +"px) translateZ(-1em)";           

                if (documentScrollY == 0) {
                  allTh.style.transform = "translate(0, 0)";
                  fromTop = allTh.getBoundingClientRect().top;
              } else if (documentScrollY > fromTop) {
                  allTh.style.transform = translateHead;
              }

              var translateCell = "translate("+documentScrollX+"px,0) translateZ(-3em)";

              for( let i=0; i < leftCells.length; i++ ) {
                leftCells[i].style.transform = translateCell;
                document.getElementById("main-header").style.transform = translateCell;
              }

              });


            }, 0);

            

            // documentEl = angular.element(document);

            // var test = element.find('#test');
            // console.log(test);

            // var allTh = element[0].querySelectorAll(".th-header");
            // console.log(allTh);
            // var leftCells = document.querySelectorAll(".leftCell");
            // console.log(leftCells);
            // var fromTop = allTh[1].getBoundingClientRect().top;

            // documentEl.bind("scroll",function() {

              // documentScroll = documentEl.scrollTop();

              

              // var translateCell = "translate("+this.scrollLeft+"px,0) translateZ(-3em)";
              // // I translate every cell from left column one by one
              // for( let i=0; i < leftCells.length; i++ ) {
              //   leftCells[i].style.transform = translateCell;
              // }
                    
              // // the same for each header cell
              // var translateHead = "translate(0,"+ (documentScroll - fromTop) +"px) translateZ(-1em)";

              

            // });
        }
    };
})

// .directive('fixedHeaderTable', function() {
//     return {
//         restrict: 'A',
//         link: function(scope, element) {

//             console.log('loaded');

//             const allTh = angular.element(document.querySelectorAll(".th-header"));
//             const leftCells = angular.element(document.querySelectorAll(".leftcell"));
//             const fromTop = angular.element(allTh[1].getBoundingClientRect().top);

//             element.addEventListener("scroll",function(){

//               const translateCell = "translate("+this.scrollLeft+"px,0) translateZ(-3em)";
//               // I translate every cell from left column one by one
//               for( let i=0; i < leftCells.length; i++ ) {
//                 leftCells[i].style.transform = translateCell;
//               }
                    
//               // the same for each header cell
//               const translateHead = "translate(0,"+ (this.scrollTop - fromTop) +"px) translateZ(-1em)";

//               if (this.scrollTop == 0) {
//                 for( let i=0; i < allTh.length; i++ ) {
//                   allTh[i].style.transform = "translate(0, 0)";
//                 }
//               } else if (this.scrollTop > fromTop) {
//                 for( let i=0; i < allTh.length; i++ ) {
//                   console.log(fromTop, translateHead);
//                   allTh[i].style.transform = translateHead;
//                 }
//               }

//             });
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