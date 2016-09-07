/*global angular:true */

angular.module('uxTools.services', [])

.factory('prototypingFactory', function() {

    var tools = [{
        "name": "Framer",
        "url": "http://framerjs.com/",
        "image": "img/prototyping/framer.png",
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
        "image": "img/prototyping/principle.png",
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
        "image": "img/prototyping/uxpin.png",
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
        "image": "img/prototyping/invision.png",
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
        "image": "img/prototyping/marvel.png",
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
        "image": "img/prototyping/flinto.png",
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
        "image": "img/prototyping/flinto-lite.png",
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
        "image": "img/prototyping/axure.png",
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
        "image": "img/prototyping/basalmiq.png",
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
        "image": "img/prototyping/lucidchart.png",
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
        "image": "img/prototyping/adobe-xd.png",
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
        "image": "img/prototyping/craft.png",
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
        "image": "img/prototyping/pixate.png",
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
        "image": "img/prototyping/origami.png",
        "plaforms": {
            "mac": true,
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
        "image": "img/prototyping/proto.io.png",
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
        "image": "img/prototyping/moqups.png",
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
        "image": "img/prototyping/atomic.io.png",
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
        "image": "img/prototyping/canvasflip.png",
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
        "image": "img/prototyping/irise.png",
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
        "image": "img/prototyping/konceptapp.png",
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
        "image": "img/prototyping/fuse.png",
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
        "image": "img/prototyping/hotgloo.png",
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
        "image": "img/prototyping/webflow.png",
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
        "image": "img/prototyping/demonstrate.png",
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
        "image": "img/prototyping/prott.png",
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
        "image": "img/prototyping/justinmind.png",
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
        "image": "img/prototyping/notable.png",
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

})

.factory('collaborationFactory', function() {

    var tools = [{
        "name": "Zeplin",
        "url": "https://zeplin.io/",
        "image": "img/collaboration/zeplin.png",
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
        "image": "img/collaboration/avocode.png",
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
        "image": "img/collaboration/marketch.png",
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
        "image": "img/collaboration/sketchmeasure.png",
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
        "image": "img/collaboration/sympli.png",
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
    }, {
        "name": "Markly",
        "url": "http://marklyapp.com/",
        "image": "img/collaboration/markly.png",
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
        "image": "img/collaboration/redpen.png",
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
        "image": "img/collaboration/specctr.png",
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