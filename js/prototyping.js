/*global angular:true */

angular.module('uxTools.prototyping', [])

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

.factory('prototypingFactory', function() {

    var tools = [{
        "name": "Framer",
        "url": "http://framerjs.com/",
        "image": "../img/logos/framer.png",
        "taylorChoice": true,
        "platforms": {
            "mac": true
        },
        "import": {
            "photoshop": true,
            "sketch": true
        },
        "micro": true,
        "navigation": true,
        "transition": true,
        "data": true,
        "code": true,
        "sharing": {
            "web": true,
            "iOS": true
        },
        "pricing": {
            "free": false,
            "subscription": "",
            "purchase": "$129"
        }
    }, {
        "name": "Principle",
        "url": "http://principleformac.com/",
        "image": "../img/logos/principle.png",
        "taylorChoice": true,
        "platforms": {
            "mac": true
        },
        "import": {
            "sketch": true
        },
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "mac": true
        },
        "pricing": {
            "free": false,
            "subscription": "",
            "purchase": "$99"
        }
    }, {
        "name": "UX Pin",
        "url": "https://uxpin.com/",
        "image": "../img/logos/uxpin.png",
        "platforms": {
            "web": true
        },
        "design": true,
        "import": {
            "sketch": true,
            "photoshop": true
        },
        "micro": true,
        "navigation": true,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": false,
            "subscription": "$19",
            "purchase": ""
        }
    }, {
        "name": "InVision",
        "url": "https://www.invisionapp.com/",
        "image": "../img/logos/invision.png",
        "platforms": {
            "web": true
        },
        "import": {
            "sketch": true,
            "photoshop": true,
            "dropbox": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
            "pdf": true,
            "html": true
        },
        "fixedHeader": true,
        "pricing": {
            "free": true,
            "subscription": "$15",
            "purchase": ""
        }
    }, {
        "name": "Marvel",
        "url": "https://marvelapp.com/",
        "image": "../img/logos/marvel.png",
        "platforms": {
            "web": true,
            "iOS": true,
            "android": true
        },
        "design": true,
        "import": {
            "sketch": true,
            "dropbox": true,
            "camera": true,
            "googleDrive": true,
            "box": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
            "iOS": true,
            "android": true,
            "appleWatch": true,
            "appleTv": true,
            "html": true,
            "pdf": true
        },
        "pricing": {
            "free": true,
            "subscription": "$12",
            "purchase": ""
        }
    }, {
        "name": "Flinto",
        "url": "https://www.flinto.com/mac",
        "image": "../img/logos/flinto.png",
        "platforms": {
            "web": true,
            "mac": true
        },
        "micro": true,
        "design": true,
        "import": {
            "sketch": true,
            "dropbox": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true
        },
        "fixedHeader": true,
        "pricing": {
            "free": false,
            "subscription": "",
            "purchase": "$99"
        }
    }, {
        "name": "Flinto Lite",
        "url": "https://www.flinto.com/lite",
        "image": "../img/logos/flinto-lite.png",
        "platforms": {
            "web": true,
        },
        "import": {
            "dropbox": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "android": true
        },
        "fixedHeader": true,
        "pricing": {
            "free": false,
            "subscription": "$20",
            "purchase": ""
        }
    }, {
        "name": "Axure",
        "url": "http://www.axure.com/",
        "image": "../img/logos/axure.png",
        "platforms": {
            "mac": true,
            "windows": true
        },
        "design": true,
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true
        },
        "pricing": {
            "free": false,
            "subscription": "$29",
            "purchase": "$495"
        }
    }, {
        "name": "Balsamiq",
        "url": "https://balsamiq.com/",
        "image": "../img/logos/basalmiq.png",
        "design": true,
        "platforms": {
            "web": true
        },
        "navigation": true,
        "sharing": {
            "web": true,
            "pdf": true
        },
        "pricing": {
            "free": false,
            "subscription": "$12",
            "purchase": "$89"
        }
    }, {
        "name": "Lucidchart",
        "url": "https://lucidchart.com/",
        "image": "../img/logos/lucidchart.png",
        "design": true,
        "platforms": {
            "web": true
        },
        "navigation": true,
        "sharing": {
            "web": true
        },
        "pricing": {
            "free": true,
            "subscription": "$5",
            "purchase": ""
        }
    }, {
        "name": "Adobe XD",
        "url": "http://www.adobe.com/products/experience-design",
        "image": "../img/logos/adobe-xd.png",
        "design": true,
        "platforms": {
            "mac": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true
        },
        "pricing": {
            "free": false,
            "subscription": "$19",
            "purchase": ""
        }
    }, {
        "name": "Craft",
        "url": "https://www.invisionapp.com/craft",
        "image": "../img/logos/craft.png",
        "platforms": {
            "mac": true
        },
        "import": {
            "sketch": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "Pixate",
        "url": "http://www.pixate.com/",
        "image": "../img/logos/pixate.png",
        "platforms": {
            "mac": true,
        },
        "import": {
            "sketch": true
        },
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "android": true
        },
        "pricing": {
            "free": true,
            "subscription": "$5",
            "purchase": ""
        }
    }, {
        "name": "Origami",
        "url": "https://facebook.github.io/origami/",
        "image": "../img/logos/origami.png",
        "plaforms": {
            "mac": true,
        },
        "import": {
            "sketch": true,
        },
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "Proto.io",
        "url": "https://proto.io/",
        "image": "../img/logos/proto.io.png",
        "platforms": {
            "web": true,
        },
        "import": {
            "photoshop": true,
            "dropbox": true,
            "sketch": true,
        },
        "sketch": true,
        "design": true,
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "android": true,
            "web": true,
            "html": true
        },
        "pricing": {
            "free": true,
            "subscription": "$24",
            "purchase": ""
        }
    }, {
        "name": "Moqups",
        "url": "https://moqups.com/",
        "image": "../img/logos/moqups.png",
        "platforms": {
            "web": true,
        },
        "design": true,
        "navigation": true,
        "sharing": {
            "web": true,
            "pdf": true,
        },
        "pricing": {
            "free": true,
            "subscription": "$19",
            "purchase": ""
        }
    }, {
        "name": "Atomic.io",
        "url": "https://atomic.io/",
        "image": "../img/logos/atomic.io.png",
        "platforms": {
            "web": true,
        },
        "import": {
            "sketch": true
        },
        "design": true,
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": false,
            "subscription": "$15",
            "purchase": ""
        }
    }, {
        "name": "CanvasFlip",
        "url": "http://canvasflip.com/",
        "image": "../img/logos/canvasflip.png",
        "platforms": {
            "web": true,
        },
        "import": {
            "sketch": true,
            "balsamiq": true,
            "dropbox": true,
            "camera": true
        },
        // "micro": only with GIF,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "android": true,
            "web": true
        },
        "analytics": true,
        "heatmap": true,
        "pricing": {
            "free": true,
            "subscription": "$19",
            "purchase": ""
        }
        // fixed header
        // screen overlays
        // timers,
    }, {
        "name": "iRise",
        "url": "https://www.irise.com/",
        "image": "../img/logos/irise.png",
        "design": true,
        "platforms": {
            "web": true,
            "windows": true,
            "mac": true
        },
        "micro": true,
        "data": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "web": true,
            "windows": true,
            "mac": true
        },
        "pricing": {
            "free": false,
            "subscription": "$29",
            "purchase": ""
        }
    }, {
        "name": "Koncept App",
        "url": "https://konceptapp.com/",
        "image": "../img/logos/konceptapp.png",
        "platforms": {
            "web": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
        },
        "tasks": true,
        "heatmap": true,
        "analytics": true,
        "pricing": {
            "free": false,
            "subscription": "$15",
            "purchase": ""
        }
    }, {
        "name": "Fuse",
        "url": "https://www.fusetools.com/",
        "image": "../img/logos/fuse.png",
        "platforms": {
            "mac": true,
            "windows": true,
        },
        "import": {
            "sketch": true,
        },
        "navigation": true,
        "micro": true,
        "transition": true,
        "data": true,
        "code": true,
        "sharing": {
            "iOS": true,
            "android": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "HotGloo",
        "url": "https://www.hotgloo.com/",
        "image": "../img/logos/hotgloo.png",
        "design": true,
        "platforms": {
            "web": true,
        },
        "navigation": true,
        "micro": true,
        "sharing": {
            "web": true,
            "pdf": true,
            "html":true
        },
        "pricing": {
            "free": false,
            "subscription": "$15",
            "purchase": ""
        }
    }, {
        "name": "Webflow",
        "url": "https://webflow.com/",
        "image": "../img/logos/webflow.png",
        "design": true,
        "platforms": {
            "web": true,
        },
        "navigation": true,
        "micro": true,
        "transition": true,
        "data": true,
        "sharing": {
            "web": true,
            "html":true
        },
        "pricing": {
            "free": true,
            "subscription": "$16",
            "purchase": null
        }
    }, {
        "name": "Demonstrate",
        "url": "http://nfnlabs.in/demonstrate/",
        "image": "../img/logos/demonstrate.png",
        "platforms": {
            "iOS": true,
        },
        "import": {
            "dropbox": true,
            "camera": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "Prott",
        "url": "https://prottapp.com/",
        "image": "../img/logos/prott.png",
        "platforms": {
            "web": true,
            "mac": true,
            "iOS": true,
            "android": true
        },
        "design": true,
        "import": {
            "sketch": true,
            "photoshop": true,
            "camera": true,
            "dropbox": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
            "iOS": true,
            "android": true
        },
        "pricing": {
            "free": true,
            "subscription": "$19",
            "purchase": null
        }
    }, {
        "name": "Justinmind",
        "url": "http://www.justinmind.com/",
        "image": "../img/logos/justinmind.png",
        "platforms": {
            "mac": true,
            "windows": true
        },
        "design": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
            "iOS": true,
            "android": true
        },
        "mobileOnly": false,
        "responsive": true,
        "pricing": {
            "free": false,
            "subscription": "$19",
            "purchase": "$495"
        }
    }, {
        "name": "Notable",
        "url": "http://notable.zurb.com/",
        "image": "../img/logos/notable.png",
        "platforms": {
            "web": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": false,
            "subscription": "$20",
            "purchase": ""
        }
    }];

    var filters = [{
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
            "tipText": "Platforms used for <br>building prototypes"
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
            "title": "Design",
            "show": true,
            "canChange": true,
            "tipText": "App can design<br>from scratch"
        }, {
            "title": "Import",
            "show": true,
            "canChange": true,
            "tipText": "Integrations with<br>other apps"
        }, {
            "title": "Animations",
            "show": true,
            "canChange": true,
            "tipText": "Individual animations<br>& micro-interactions"
        },
        // {
        //     "title": "Navigation",
        //     "show": true,
        //     "canChange": true,
        //     "tipText": ""
        // }, 
        {
            "title": "Transitions",
            "show": true,
            "canChange": true,
            "tipText": "Animates between screens"
        }, {
            "title": "Data",
            "show": true,
            "canChange": true,
            "tipText": "Uses data to<br>render UI"
        }, {
            "title": "Code",
            "show": true,
            "canChange": true,
            "tipText": "Requires knowledge<br>of code"
        }, {
            "title": "Sharing",
            "show": true,
            "canChange": true,
            "tipText": "How others can<br>use the prototype"
        }, {
            "title": "Tasks",
            "show": false,
            "canChange": true,
            "tipText": ""
        }, {
            "title": "Analytics",
            "show": false,
            "canChange": true,
            "tipText": "App can track events"
        }, {
            "title": "Heatmap",
            "show": false,
            "canChange": true,
            "tipText": "App generates heatmaps<br>from user testing"
        }
    ];

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