/*global angular:true */

angular.module('uxTools.services', [])

.factory('prototypingFactory', function() {

    var tools = [{
        "name": "Framer",
        "url": "http://framerjs.com/",
        "image": "img/prototyping/framer.png",
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
        }
    }, {
        "name": "Principle",
        "url": "http://principleformac.com/",
        "image": "img/prototyping/principle.png",
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
            "free": {
                "tipText": "1 Project"
            },
            "monthly": {
                "personal": [{
                    "price":"$15",
                    "tipText":"3 Projects"
                    }, {
                    "price":"$25",
                    "tipText":"Unlimited Projects"
                }],
                "team": [{
                    "price":"$99",
                    "tipText":"Unlimited Projects"
                }],
                "enterprise": [{
                    "price":"$--",
                    "tipText":"Unlimited everything"
                }]
            },
            "annual": {
                "personal": [{
                    "price":"$13",
                    "tipText":"3 Projects"
                    }, {
                    "price":"$22",
                    "tipText":"Unlimited Projects"
                }],
                "team": [{
                    "price":"$89",
                    "tipText":"Unlimited Projects"
                }],
                "enterprise": [{
                    "price":"$--",
                    "tipText":"Unlimited everything"
                }]
            }
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
            "free": {
                "tipText": "1 Project"
            },
            "monthly": {
                "personal": [{
                    "price":"$10",
                    "tipText":"3 Projects"
                    }, {
                    "price":"$555",
                    "tipText":"Unlimited Projects"
                }],
                "enterprise": [{
                    "price":"$--",
                    "tipText":"Unlimited everything"
                }]
            }
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
        "fixedHeader": true
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
        "fixedHeader": true
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
            //- html
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
        // fixed header
        // screen overlays
        // timers
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
        "analytics": true
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
        "responsive": true
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
        }, 
        // {
        //     "title": "Pricing",
        //     "show": true,
        //     "canChange": true,
        //     "tipText": "How much the app costs"
        // }, 
        {
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
        // "pricingMonthly": {
        //     "free": true,
        //     "freeText": "1 Project",
        //     "levelOne": "$15/mo",
        //     "levelOneText": "3 Projects",
        //     "levelTwo": "$25/mo",
        //     "levelTwoText": "8 Projects",
        //     "levelThree": "$100/mo",
        //     "levelThreeText": "Unlimited Projects"
        // }, 
        // "pricingAnnual": {
        //     "free": true,
        //     "freeText": "1 Project",
        //     "levelOne": "$13/mo",
        //     "levelOneText": "3 Projects",
        //     "levelTwo": "$22/mo",
        //     "levelTwoText": "8 Projects",
        //     "levelThree": "$90/mo",
        //     "levelThreeText": "Unlimited Projects"
        // }
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
        // "pricingMonthly": {
        //     "levelOne": "$7/user",
        //     "levelOneText": "Per user, max 3",
        //     "levelTwo": "$10/mo",
        //     "levelTwoText": "Per user, unlimited",
        //     "levelThree": "???",
        //     "levelThreeText": "Not publicized"
        // }
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
        "automatic": true,
        "assets": true,
        "specs": true,
        "measure": true,
        "sharing": {
            "html": true
        },
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
            "tipText": "Users can comment <br>on designs"
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
        "taylorChoice": true
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
    }, {
        "name": "UserTrack",
        "url": "https://www.usertrack.net/",
        "image": "img/monitoring/usertrack.png",
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "location": true
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
            "show": false,
            "canChange": true,
            "tipText": "Platform used to<br> view recordings"
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