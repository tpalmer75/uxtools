/*global angular:true */

angular.module('testApp', [])

.controller('testCtrl', function($scope) {
  $scope.testObjects = 
    [{ 
      'name':'Framer',
      'url':'http://framerjs.com/',
      'image':'img/framer.png',
      'mac':true,
      'sketch':true,
      'photoshop':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'remote':true,
      'data':true,
      'code':true,
      'shareWeb':true
    }, { 
      'name':'Principle',
      'url':'http://principleformac.com/',
      'image':'img/principle.png',
      'mac':true,
      'sketch':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'shareIos':true
    }, { 
      'name':'UX Pin',
      'url':'https://uxpin.com/',
      'image':'img/uxpin.png',
      'web':true,
      'design':true,
      'sketch':true,
      'photoshop':true,
      'micro':true,
      'navigation':true,
      'remote':true,
      'shareWeb':true
    }, { 
      'name':'InVision',
      'url':'https://www.invisionapp.com/',
      'image':'img/invision.png',
      'web':true,
      'sketch':true,
      'photoshop':true,
      'navigation':true,
      'transition':true,
      'remote':true,
      'shareWeb':true,
      'fixedHeader':true
    }, { 
      'name':'Marvel',
      'url':'https://marvelapp.com/',
      'image':'img/marvel.png',
      'web':true,
      'ios':true,
      'design':true,
      'sketch':true,
      'navigation':true,
      'transition':true,
      'remote':true,
      'shareWeb':true,
      'shareWatch':true,
      'shareDesktop':true
    }, { 
      'name':'Flinto',
      'url':'https://www.flinto.com/mac',
      'image':'img/flinto.png',
      'web':true,
      'ios':true,
      'micro':true,
      'design':true,
      'sketch':true,
      'navigation':true,
      'transition':true,
      'remote':true,
      'shareIos':true,
      'fixedHeader':true
    }, { 
      'name':'Flinto Lite',
      'url':'https://www.flinto.com/lite',
      'image':'img/flinto-lite.png',
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
      'image':'img/axure.png',
      'mac':true,
      'windows':true,
      'design':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'remote':true,
      'shareWeb':true
    },{ 
      'name':'Basalmiq',
      'url':'https://balsamiq.com/',
      'image':'img/basalmiq.png',
      'design':true,
      'web':true,
      'navigation':true,
      'remote':true,
      'shareWeb':true
    },{ 
      'name':'Lucidchart',
      'url':'https://lucidchart.com/',
      'image':'img/lucidchart.png',
      'design':true,
      'web':true,
      'navigation':true,
      'remote':true,
      'shareWeb':true
    },{ 
      'name':'Adobe XD',
      'url':'http://www.adobe.com/products/experience-design',
      'image':'img/adobe-xd.png',
      'design':true,
      'mac':true,
      'windows':true,
      'navigation':true,
      'transition':true
    }, { 
      'name':'Craft',
      'url':'http://www.adobe.com/products/experience-design',
      'image':'img/craft.png',
      'mac':true,
      'sketch':true,
      'navigation':true,
      'transition':true,
      'shareIos':true
    },{ 
      'name':'Pixate',
      'url':'http://www.pixate.com/',
      'image':'img/pixate.png',
      'mac':true,
      'sketch':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'remote':true,
      'shareIos':true,
      'shareAndroid':true
    },{ 
      'name':'Origami',
      'url':'https://facebook.github.io/origami/',
      'image':'img/origami.png',
      'mac':true,
      'micro':true,
      'navigation':true,
      'transition':true,
      'remote':true,
      'shareIos':true
    }];
});