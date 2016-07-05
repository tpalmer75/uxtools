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
            "web": true
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
            "web": true
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
            "photoshop": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true
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
            "sketch": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
            "iOS": true,
            "android": true,
            "appleWatch": true,
            "appleTv": true
            //- HTML
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
            "iOS": true
        },
        "micro": true,
        "design": true,
        "import": {
            "sketch": true
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
            "iOS": true
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
        "sketch": true,
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
            "tipText": "App can animate<br>between screens"
        }, {
            "title": "Data",
            "show": true,
            "canChange": true,
            "tipText": "App can use<br>data to render UI"
        }, {
            "title": "Code",
            "show": true,
            "canChange": true,
            "tipText": "App uses code"
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

.factory('handOffFactory', function() {

    var tools = [{
        "name": "Zeplin",
        "url": "https://zeplin.io/",
        "image": "img/handoff/zeplin.png",
        "platforms": {
            "mac": true,
            "windows": true
        },
        "import": {
            "sketch": true,
            "photoshop": true
        },
        "automatic": true,
        "assets": true,
        "measure": true,
        "css": true,
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
        "image": "img/handoff/avocode.png",
        "platforms": {
            "mac": true,
            "windows": true,
            "linux": true
        },
        "import": {
            "sketch": true,
            "photoshop":true
        },
        "automatic": true,
        "assets": true,
        "measure": true,
        "css": true,
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
        "image": "img/handoff/marketch.png",
        "platforms": {
            "mac": true,
        },
        "import": {
            "sketch": true
        },
        "measure": true,
        "css": true,
        "sharing": {
            "html": true
        },
    }, {
        "name": "Sketch Measure",
        "url": "https://github.com/utom/sketch-measure",
        "image": "img/handoff/sketchmeasure.png",
        "platforms": {
            "mac": true
        },
        "import": {
            "sketch": true
        },
        "measure": true,
        "css": true,
        "sharing": {
            "html": true
        },
    }, {
        "name": "Sympli",
        "url": "https://sympli.io/",
        "image": "img/handoff/sympli.png",
        "platforms": {
            "web": true
        },
        "import": {
            "sketch": true,
            "photoshop": true
        },
        "automatic": true,
        "assets": true,
        "measure": true,
        "css": true,
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
    }, {
        "name": "Markly",
        "url": "http://marklyapp.com/",
        "image": "img/handoff/markly.png",
        "platforms": {
            "mac": true
        },
        "import": {
            "sketch": true,
            "photoshop": true
        },
        "measure": true,
        "css": true,
        "sharing": {
            "web": true,
        },
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
            "title": "Import",
            "show": true,
            "canChange": true,
            "tipText": "Integrations with <br>design apps"
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
            "title": "CSS",
            "show": true,
            "canChange": true,
            "tipText": "Can generate CSS"
    }, {
            "title": "Variables",
            "show": true,
            "canChange": true,
            "tipText": "Provide <br>custom CSS variables"
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

});