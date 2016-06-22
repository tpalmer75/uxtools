/*global angular:true */

angular.module('uxTools', ['ui.router'])

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
      controller: 'prototypingCtrl'
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

.controller('prototypingCtrl', function($scope) {
  $scope.testObjects = 
    [{ 
      'name':'Framer',
      'url':'http://framerjs.com/',
      'image':'img/prototyping/framer.png',
      'mac':true,
      'sketch':true,
      'photoshop':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'data':true,
      'code':true,
      'shareWeb':true
    }, { 
      'name':'Principle',
      'url':'http://principleformac.com/',
      'image':'img/prototyping/principle.png',
      'mac':true,
      'sketch':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'shareIos':true
    }, { 
      'name':'UX Pin',
      'url':'https://uxpin.com/',
      'image':'img/prototyping/uxpin.png',
      'web':true,
      'design':true,
      'sketch':true,
      'photoshop':true,
      'micro':true,
      'navigation':true,
      'shareWeb':true
    }, { 
      'name':'InVision',
      'url':'https://www.invisionapp.com/',
      'image':'img/prototyping/invision.png',
      'web':true,
      'sketch':true,
      'photoshop':true,
      'navigation':true,
      'transition':true,
      'shareWeb':true,
      'fixedHeader':true
    }, { 
      'name':'Marvel',
      'url':'https://marvelapp.com/',
      'image':'img/prototyping/marvel.png',
      'web':true,
      'ios':true,
      'android':true,
      'design':true,
      'sketch':true,
      'navigation':true,
      'transition':true,
      'shareWeb':true,
      'shareIos':true,
      'shareAndroid':true,
      'shareDesktop':true,
      'shareAppleWatch':true,
      'shareAppleTv':true
    }, { 
      'name':'Flinto',
      'url':'https://www.flinto.com/mac',
      'image':'img/prototyping/flinto.png',
      'web':true,
      'ios':true,
      'micro':true,
      'design':true,
      'sketch':true,
      'navigation':true,
      'transition':true,
      'shareIos':true,
      'fixedHeader':true
    }, { 
      'name':'Flinto Lite',
      'url':'https://www.flinto.com/lite',
      'image':'img/prototyping/flinto-lite.png',
      'web':true,
      'ios':true,
      'navigation':true,
      'transition':true,
      'shareIos':true,
      'shareAndroid':true,
      'fixedHeader':true
    }, { 
      'name':'Axure',
      'url':'http://www.axure.com/',
      'image':'img/prototyping/axure.png',
      'mac':true,
      'windows':true,
      'design':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'shareWeb':true
    },{ 
      'name':'Basalmiq',
      'url':'https://balsamiq.com/',
      'image':'img/prototyping/basalmiq.png',
      'design':true,
      'web':true,
      'navigation':true,
      'shareWeb':true,
      'sharePdf':true, // keep an eye out
    },{ 
      'name':'Lucidchart',
      'url':'https://lucidchart.com/',
      'image':'img/prototyping/lucidchart.png',
      'design':true,
      'web':true,
      'navigation':true,
      'shareWeb':true
    },{ 
      'name':'Adobe XD',
      'url':'http://www.adobe.com/products/experience-design',
      'image':'img/prototyping/adobe-xd.png',
      'design':true,
      'mac':true,
      'windows':true,
      'navigation':true,
      'transition':true
    }, { 
      'name':'Craft',
      'url':'http://www.adobe.com/products/experience-design',
      'image':'img/prototyping/craft.png',
      'mac':true,
      'sketch':true,
      'navigation':true,
      'transition':true,
      'shareIos':true
    },{ 
      'name':'Pixate',
      'url':'http://www.pixate.com/',
      'image':'img/prototyping/pixate.png',
      'mac':true,
      'sketch':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'shareIos':true,
      'shareAndroid':true
    },{ 
      'name':'Origami',
      'url':'https://facebook.github.io/origami/',
      'image':'img/prototyping/origami.png',
      'mac':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'shareIos':true
    },{ 
      'name':'Proto.io',
      'url':'https://proto.io/',
      'image':'img/prototyping/proto.io.png',
      'web':true,
      'photoshop':true,
      'sketch':true,
      'design':true,
      'dropbox':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'shareIos':true,
      'shareAndroid':true,
      'shareWeb':true
    },{ 
      'name':'Moqups',
      'url':'https://moqups.com/',
      'image':'img/prototyping/moqups.png',
      'web':true,
      'design':true,
      'navigation':true,
      'shareWeb':true,
      'sharePdf':true,
    },{ 
      'name':'Atomic.io',
      'url':'https://atomic.io/',
      'image':'img/prototyping/atomic.io.png',
      'web':true,
      'design':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'shareWeb':true,
    },{ 
      'name':'CanvasFlip',
      'url':'http://canvasflip.com/',
      'image':'img/prototyping/canvasflip.png',
      'web':true,
      'sketch':true,
      'photoImport':true, // keep an eye out
      'micro':true,
      'navigation':true,
      'transition':true,
      'shareIos':true,
      'shareAndroid':true,
      'shareWeb':true,
    }];
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