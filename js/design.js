angular.module('uxTools.design', [])

.controller('designCtrl', function($scope, $state, designFactory) {

  $scope.designTools = designFactory.tools();
  $scope.filters = designFactory.filters();
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
    designFactory.setFilters($scope.tempFilters);
    $state.reload();
    $scope.showFiltersModal = false;
  };

})

.factory('designFactory', function() {

    var tools = [{
        "name": "Sketch",
        "url": "https://www.sketchapp.com/",
        "image": "img/design/sketch.png",
        "platforms": {
            "mac": true
        },
        "import": {
            "sketch": true,
            "svg": true,
            "eps": true,
            "pdf": true,
            "tiff": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "svg": true,
            "pdf": true,
            "eps": true,
            "tiff": true
        },
        "offline": true,
        "penTool": true,
        "collaboration": false,
        "handoff": false,
        "plugins": true,
        "artboards": true,
        "symbols": true,
        "responsive": true,
        "vector": true,
        "pricing": {
            "purchase": "$99"
        }
    }, {
        "name": "Figma",
        "url": "https://www.figma.com",
        "image": "img/design/figma.png",
        "platforms": {
            "web": true
        },
        "import": {
            "svg": true,
            "jpg": true,
            "png": true,
        },
        "export": {
            "png": true,
            "jpg": true,
            "svg": true,
            "tiff": true
        },
        "offline": false,
        "penTool": true,
        "collaboration": true,
        "handoff": true,
        "artboards": true,
        "symbols": false,
        "responsive": true,
        "vector": true,
        "pricing": {
            "free": true,
            "subscription": "$--",
            "purchase": "$--"
        }
    }, {
        "name": "Adobe Illustrator",
        "url": "http://www.adobe.com/products/illustrator.html",
        "image": "img/design/illustrator.png",
        "platforms": {
            "mac": true,
            "windows": true
        },
        "import": {
            "svg": true,
            "eps": true,
            "pdf": true,
            "psd": true,
            "tiff": true,
            "ai": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "svg": true,
            "pdf": true,
            "eps": true,
            "tiff": true,
            "ai": true
        },
        "offline": true,
        "penTool": true,
        "collaboration": false,
        "handoff": false,
        "artboards": true,
        "plugins": true,
        "symbols": true,
        "responsive": true,
        "vector": true,
        "pricing": {
            "free": false,
            "subscription": "$20"
        }
    }, {
        "name": "Adobe Photoshop",
        "url": "http://www.adobe.com/products/photoshop.html",
        "image": "img/design/photoshop.png",
        "platforms": {
            "mac": true,
            "windows": true
        },
        "import": {
            "pdf": true,
            "psd": true,
            "ai": true,
            "tiff": true,
            "eps": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "tiff": true,
            "pdf": true,
            "psd": true
        },
        "offline": true,
        "penTool": true,
        "collaboration": false,
        "plugins": true,
        "handoff": false,
        "artboards": true,
        "symbols": false,
        "responsive": false,
        "vector": true,
        "pricing": {
            "free": false,
            "subscription": "$20"
        }
    }, {
        "name": "Affinity Designer",
        "url": "https://affinity.serif.com/en-us/",
        "image": "img/design/affinity-designer.png",
        "platforms": {
            "mac": true
        },
        "import": {
            "svg": true,
            "eps": true,
            "pdf": true,
            "ai": true,
            "tiff": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "gif": true,
            "svg": true,
            "psd": true,
            "eps": true,
            "tiff": true,
            "pdf": true
        },
        "offline": true,
        "penTool": true,
        "collaboration": false,
        "handoff": false,
        "artboards": true,
        "symbols": false, // in beta, coming soon
        "responsive": false, // in beta, coming soon
        "vector": true,
        "pricing": {
            "free": false,
            "purchase": "$50"
        }
    }, {
        "name": "Adobe XD",
        "url": "http://www.adobe.com/products/experience-design.html",
        "image": "img/design/adobe-xd.png",
        "platforms": {
            "mac": true,
            "windows": true
        },
        "import": {
            "svg": true,
            "tiff": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "gif": true,
            "svg": true,
            "tiff": true,
            "pdf": true
        },
        "offline": true,
        "penTool": true,
        "collaboration": false,
        "handoff": false,
        "artboards": true,
        "symbols": false,
        "responsive": false,
        "prototyping": true,
        "vector": true,
        "pricing": {
            "free": true,
            "subscription": "$--"
        }

    }, {
        "name": "UX Pin",
        "url": "https://www.uxpin.com/",
        "image": "img/design/uxpin.png",
        "platforms": {
            "web": true
        },
        "import": {
            "sketch": true,
            "psd": true,
            "svg": true,
            "eps": true,
            "pdf": true,
            "ai": true,
            "tiff": true
        },
        "export": {
            "png": true,
            "pdf": true,
            "html": true
        },
        "offline": false,
        "penTool": false,
        "collaboration": true,
        "handoff": false,
        "artboards": false,
        "symbols": false,
        "responsive": false,
        "prototyping": true,
        "vector": true,
        "pricing": {
            "free": false,
            "subscription": "$20"
        }

    }, {
        "name": "Axure",
        "url": "http://www.axure.com/",
        "image": "img/design/axure.png",
        "platforms": {
            "mac": true,
            "windows": true
        },
        "import": {
            "png": true,
            "jpg": true,
            "gif": true
        },
        "export": {
            "word": true,
            "png": true,
            "jpg": true,
            "html": true,
            "pdf": true
        },
        "offline": true,
        "penTool": false,
        "collaboration": true,
        "handoff": false, // generate a spec Word doc
        "artboards": false,
        "symbols": false,
        "responsive": false,
        "prototyping": true,
        "vector": false, // Seems HTML based
        "pricing": {
            "free": false,
            "subscription": "$29",
            "purchase": "$495"
        }
    }];

    // Atomic.io
    // Balsamiq
    // Flinto
    // Hotgloo
    // iRise
    // Justinmind
    // Lucidchart
    // Marvel
    // Moqups
    // Proto.io
    // Prott
    // Webflow

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
            "title": "Offline",
            "show": true,
            "canChange": true,
            "tipText": "Can open and<br>edit offline"
    }, {
            "title": "Pen Tool",
            "show": true,
            "canChange": true,
            "tipText": "Draw vectors<br>and paths"
    }, {
            "title": "Collaborate",
            "show": true,
            "canChange": true,
            "tipText": "Simultaneous editing"
    }, {
            "title": "Handoff",
            "show": true,
            "canChange": true,
            "tipText": "Automatic specs<br>for developers"
    }, {
            "title": "Artboards",
            "show": true,
            "canChange": true,
            "tipText": "Multiple visible<br>artboards"
    }, {
            "title": "Symbols",
            "show": true,
            "canChange": true,
            "tipText": "Document-wide<br>master symbols"
    }, {
            "title": "Responsive",
            "show": true,
            "canChange": true,
            "tipText": "Dynamically resizing<br>groups"
    }, {
            "title": "Prototyping",
            "show": true,
            "canChange": true,
            "tipText": "Can prototype<br>within the app"
    }, {
            "title": "Import",
            "show": false,
            "canChange": true,
            "tipText": "Unique formats that<br>can be opened"
    }, {
            "title": "Export",
            "show": false,
            "canChange": true,
            "tipText": "Unique formats that can<br>be exported"
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