/*global angular:true */

angular.module('uxTools', ['ui.router', 'ngAnimate', 'uxTools.services', '720kb.tooltips'])

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
      controller: 'prototypingCtrl'
    })
    .state('usability-testing', {
      url: '/usability-testing',
      templateUrl : '../templates/usability-testing.html',
      controller: 'prototypingCtrl'
    });
})

.config(['tooltipsConfProvider', function configConf(tooltipsConfProvider) {
  tooltipsConfProvider.configure({
    'speed': 'fast',
    'side': 'bottom'
  });
}])

.controller('prototypingCtrl', function($scope, $state, prototypingFactory) {

  $scope.prototypingTools = prototypingFactory.tools();
  $scope.filters = prototypingFactory.filters();
  // Copy filters so ngModel doesn't reflect while changing
  $scope.tempFilters = angular.copy($scope.filters);

  $scope.modalShowing = false;
  //$scope.showMonthly = true; for pricing

  $scope.showFiltersModal = function(command) {
    if (command === 'show') {
      $scope.modalShowing = true;
    } else if (command === 'hide') {
      $scope.modalShowing = false;
    }
  };

  $scope.isFilterVisible = function(string) {
    for ( var i = 0; i < $scope.filters.length; i++ ) {
      if ( $scope.filters[i].title === string ) {
        return $scope.filters[i].show;
      }
    }
  };

  $scope.setFilters = function() {
    prototypingFactory.setFilters($scope.tempFilters);
    $state.reload();
    $scope.showFiltersModal = false;
  };

})

.controller('collaborationCtrl', function($scope, $state, collaborationFactory) {

  $scope.prototypingTools = collaborationFactory.tools();
  $scope.filters = collaborationFactory.filters();
  // Copy filters so ngModel doesn't reflect while changing
  $scope.tempFilters = angular.copy($scope.filters);

  $scope.modalShowing = false;

  $scope.showFiltersModal = function(command) {
    if (command === 'show') {
      $scope.modalShowing = true;
    } else if (command === 'hide') {
      $scope.modalShowing = false;
    }
  };

  $scope.isFilterVisible = function(string) {
    for ( var i = 0; i < $scope.filters.length; i++ ) {
      if ( $scope.filters[i].title === string ) {
        return $scope.filters[i].show;
      }
    }
  };

  $scope.setFilters = function() {
    collaborationFactory.setFilters($scope.tempFilters);
    $state.reload();
    $scope.showFiltersModal = false;
  };

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
});