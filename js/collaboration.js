angular.module('uxTools.collaboration', [])

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

.factory('collaborationFactory', function() {

    var tools = [{
        "name": "Zeplin",
        "url": "https://zeplin.io/",
        "image": "../img/logos/zeplin.png",
        "platforms": {
            "mac": true,
            "windows": true
        },
        "programs": {
            "sketch": true,
            "photoshop": true
        },
        "specs": true,
        "automatic": true,
        "assets": true,
        "measure": true,
        "variables": true,
        "guides": true,
        "comments": true,
        "sharing": {
            "mac": true,
            "web": true,
            "windows": true
        },
        "integrations": {
            "slack": true,
        },
        "pricing": {
            "free": true,
            "subscription": "$15",
            "purchase": ""
        }
    }, {
        "name": "Avocode",
        "url": "https://avocode.com/",
        "image": "../img/logos/avocode.png",
        "platforms": {
            "mac": true,
            "windows": true,
            "linux": true
        },
        "programs": {
            "sketch": true,
            "photoshop":true
        },
        "specs": true,
        "automatic": true,
        "assets": true,
        "measure": true,
        "variables": true,
        "guides": true,
        "layers": true,
        "comments": true,
        "revisions": true,
        "sharing": {
            "mac": true,
            "windows": true,
            "linux": true
        },
        "integrations": {
            "slack": true,
        },
        "pricing": {
            "free": false,
            "subscription": "$7",
            "purchase": ""
        }
    }, {
        "name": "Marketch",
        "url": "https://github.com/tudou527/marketch",
        "image": "../img/logos/marketch.png",
        "platforms": {
            "mac": true,
        },
        "programs": {
            "sketch": true
        },
        "specs": true,
        "measure": true,
        "sharing": {
            "html": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "Sketch Measure",
        "url": "https://github.com/utom/sketch-measure",
        "image": "../img/logos/sketchmeasure.png",
        "platforms": {
            "mac": true
        },
        "programs": {
            "sketch": true
        },
        "variables": true,
        "automatic": true,
        "assets": true,
        "specs": true,
        "measure": true,
        "sharing": {
            "html": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "Sympli",
        "url": "https://sympli.io/",
        "image": "../img/logos/sympli.png",
        "platforms": {
            "web": true
        },
        "programs": {
            "sketch": true,
            "photoshop": true
        },
        "specs": true,
        "automatic": true,
        "assets": true,
        "measure": true,
        "variables": true,
        "guides": true,
        "layers": true,
        "comments": true,
        "revisions": true,
        "sharing": {
            "web": true,
            "xcode": true,
            "androidStudio": true
        },
        "integrations": {
            "slack": true,
        },
        "pricing": {
            "free": true,
            "subscription": "$15",
            "purchase": ""
        }
        // Visual diffs
    }, {
        "name": "Markly",
        "url": "http://marklyapp.com/",
        "image": "../img/logos/markly.png",
        "platforms": {
            "mac": true
        },
        "programs": {
            "sketch": true,
            "photoshop": true
        },
        "specs": true,
        "measure": true,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": false,
            "subscription": "",
            "purchase": "$50"
        }
    }, {
        "name": "Red Pen",
        "url": "https://redpen.io/",
        "image": "../img/logos/redpen.png",
        "platforms": {
            "web": true,
        },
        "comments": true,
        "revisions": true,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": false,
            "subscription": "$20",
            "purchase": ""
        }
    }, {
        "name": "Specctr",
        "url": "https://specctr.com/cloud/home",
        "image": "../img/logos/specctr.png",
        "platforms": {
            "mac": true,
            "windows": true,
        },
        "programs": {
            "photoshop":true,
            "illustrator": true,
            "indesign": true
        },
        "specs": true,
        "measure": true,
        "comments": true,
        "revisions": true,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": true,
            "subscription": "$9",
            "purchase": ""
        }
    }];

    var filters = [
    {
            "title": "",
            "show": true,
            "canChange": false
    }, {
            "title": "Name",
            "show": true,
            "canChange": true,
            "tipText": "Name of app"
    }, {
            "title": "Platform",
            "show": true,
            "canChange": true,
            "tipText": "Platforms used to <br>upload designs"
    }, {
            "title": "Free",
            "show": true,
            "canChange": true,
            "tipText": "Has a free version"
    }, {
            "title": "Subscription",
            "show": true,
            "canChange": true,
            "tipText": "Cheapest monthly<br>payment"
    }, {
            "title": "Purchase",
            "show": true,
            "canChange": true,
            "tipText": "One time cost"
    }, {
            "title": "Programs",
            "show": true,
            "canChange": true,
            "tipText": "Compatible design programs"
    }, {
            "title": "Specs",
            "show": true,
            "canChange": true,
            "tipText": "App creates design <br>specifications"
    }, {
            "title": "Automatic",
            "show": true,
            "canChange": true,
            "tipText": "App automatically <br>generates specs"
    }, {
            "title": "Assets",
            "show": true,
            "canChange": true,
            "tipText": "Export <br>design assets"
    }, {
            "title": "Measure",
            "show": true,
            "canChange": true,
            "tipText": "Measure <br>distance and size"
    }, {
            "title": "Variables",
            "show": true,
            "canChange": true,
            "tipText": "Allows custom <br>CSS variables"
    }, {
            "title": "Guides",
            "show": true,
            "canChange": true,
            "tipText": "Maintains layout guides <br>from design apps"
    }, {
            "title": "Layers",
            "show": false,
            "canChange": true,
            "tipText": "App shows layer tree"
    }, {
            "title": "Comments",
            "show": true,
            "canChange": true,
            "tipText": "Viewers can comment <br>on designs"
    }, {
            "title": "Revisions",
            "show": false,
            "canChange": true,
            "tipText": "Save versions <br>of files"
    }, {
            "title": "Sharing",
            "show": true,
            "canChange": true,
            "tipText": "How users can <br>access designs"
    }, {
            "title": "Integrations",
            "show": true,
            "canChange": true,
            "tipText": "Other external apps"
    }];

    return {
        tools: function() {
            return tools;
        },
        filters: function() {
            return filters;
        },
        setFilters: function(data) {
            filters = data;
        }
    };

});