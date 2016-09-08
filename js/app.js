/*global angular:true */

// @codekit-prepend "jquery.fixedTblHdrLftCol-min.js"
// @codekit-prepend "angular-tooltips.js"
// @codekit-prepend "prototyping.js"
// @codekit-prepend "collaboration.js"
// @codekit-prepend "monitoring.js"


angular.module('uxTools', ['ui.router', 'ngAnimate', 'uxTools.prototyping', 'uxTools.collaboration', 'uxTools.monitoring', '720kb.tooltips'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('prototyping', {
      url: '/',
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
    .state('usability-testing', {
      url: '/usability-testing',
      templateUrl : '../templates/usability-testing.html',
      controller: 'prototypingCtrl'
    });
})

.directive('fixedHeaderTable', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            $timeout(function() {
              $(element).fixedTblHdrLftCol({
                scroll: {
                  height: '100%',
                  width: '100%'
                }
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