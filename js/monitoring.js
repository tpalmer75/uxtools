angular.module('uxTools.monitoring', [])

.controller('monitoringCtrl', function($scope, $state, monitoringFactory) {

  $scope.prototypingTools = monitoringFactory.tools();
  $scope.filters = monitoringFactory.filters();
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
    monitoringFactory.setFilters($scope.tempFilters);
    $state.reload();
    $scope.showFiltersModal = false;
  };

})

.factory('monitoringFactory', function() {

    var tools = [{
        "name": "Inspectlet",
        "url": "http://www.inspectlet.com/",
        "image": "img/monitoring/inspectlet.png",
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "tags": true,
        "location": true,
        "skipInactivity": true,
        "playbackSpeed": true,
        "export": {
            "html": true
        },
        "pricing": {
            "free": true,
            "subscription": "$39"
        }
    }, {
        "name": "Lucky Orange",
        "url": "http://www.luckyorange.com/",
        "image": "img/monitoring/luckyorange.png",
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "tags": true,
        "polls": true,
        "formAnalytics": true,
        "location": true,
        "console": true,
        "skipInactivity": true,
        "playbackSpeed": true,
        "pricing": {
            "free": false,
            "subscription": "$10"
        }
        // can watch live sessions
        // can show trending referrers
        // can show trending tweets
        // can see global map of locations
    }, {
        "name": "Fullstory",
        "url": "http://www.fullstory.com/",
        "image": "img/monitoring/fullstory.png",
        "platforms": {
            "web": true
        },
        "playback": true,
        "tags": true,
        "location": true,
        "console": true,
        "skipInactivity": true,
        "playbackSpeed": true,
        "jumpBack": true, // Skip backwards a few seconds
        "taylorChoice": true,
        "pricing": {
            "free": false,
            "subscription": "$199"
        }
        // Can search according the the html element a user clicked
        // can watch live sessions
    }, {
        "name": "Hotjar",
        "url": "https://www.hotjar.com/",
        "image": "img/monitoring/hotjar.png",
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "location": true,
        "formAnalytics": true,
        "polls": true,
        "playbackSpeed": true,
        "skipInactivity": true,
        "pricing": {
            "free": false,
            "subscription": "$29"
        }
        // host custom surveys like Qualtrics
    }, {
        "name": "MouseStats",
        "url": "https://www.mousestats.com/",
        "image": "img/monitoring/mousestats.png",
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "formAnalytics": true,
        "polls": true,
        "skipInactivity": true,
        "pricing": {
            "free": false,
            "subscription": "$29"
        }
    }, {
        "name": "UserTrack",
        "url": "https://www.usertrack.net/",
        "image": "img/monitoring/usertrack.png",
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "location": true,
        "skipInactivity": true,
        "pricing": {
            "free": false,
            "purchase": "$27"
        }
    }, {
        "name": "Zeerat",
        "url": "https://zeerat.com",
        "image": "img/monitoring/zeerat.png",
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "location": true,
        "formAnalytics": true,
        "pricing": {
            "free": false,
            "subscription": "$40"
        }
    }, {
        "name": "Jaco",
        "url": "http://www.getjaco.com/",
        "image": "img/monitoring/jaco.png",
        "platforms": {
            "web": true
        },
        "playback": true,
        "tags": false,
        "location": false,
        "console": false,
        "skipInactivity": true,
        "playbackSpeed": true,
        "taylorChoice": true,
        "pricing": {
            "free": true,
            "subscription": "$39"
        }
        // Can search according the the html element a user clicked
        // can watch live sessions
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
            "title": "Playback",
            "show": true,
            "canChange": true,
            "tipText": "Records user's<br> actions"
    }, {
            "title": "Skip",
            "show": true,
            "canChange": true,
            "tipText": "Can skip inactivity<br> during playback"
    }, {
            "title": "Speed",
            "show": true,
            "canChange": true,
            "tipText": "Fast-forward<br> & half-speed"
    }, {
            "title": "Jump Back",
            "show": true,
            "canChange": true,
            "tipText": "Go back a few seconds<br> in playback (so useful)"
    }, {
            "title": "Console",
            "show": true,
            "canChange": true,
            "tipText": "Records JS console<br> during playback"
    }, {
            "title": "Heatmaps",
            "show": true,
            "canChange": true,
            "tipText": "Generates heatmap<br> of actions"
    }, {
            "title": "Location",
            "show": true,
            "canChange": true,
            "tipText": "Shows visitor's<br> location"
    }, {
            "title": "Form Stats",
            "show": true,
            "canChange": true,
            "tipText": "Analyzes form<br> drop off & stats"
    }, {
            "title": "Polls",
            "show": true,
            "canChange": true,
            "tipText": "Can create<br> user surveys"
    }, {
            "title": "Export",
            "show": true,
            "canChange": true,
            "tipText": "Format for<br> downloaded"
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