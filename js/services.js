/*global angular:true */

angular.module('uxTools.services', [])

.factory('prototypingFactory', function() {

    var tools = [{
        'name': 'Framer',
        'url': 'http://framerjs.com/',
        'image': 'img/prototyping/framer.png',
        'platforms': {
            'mac': true
        },
        'import': {
            'photoshop': true,
            'sketch': true
        },
        'micro': true,
        'navigation': true,
        'transition': true,
        'data': true,
        'code': true,
        'sharing': {
            'web': true
        }
    }, {
        'name': 'Principle',
        'url': 'http://principleformac.com/',
        'image': 'img/prototyping/principle.png',
        'platforms': {
            'mac': true
        },
        'import': {
            'sketch': true
        },
        'micro': true,
        'navigation': true,
        'transition': true,
        'sharing': {
            'iOS': true,
            'mac': true
        }
    }, {
        'name': 'UX Pin',
        'url': 'https://uxpin.com/',
        'image': 'img/prototyping/uxpin.png',
        'platforms': {
            'web': true
        },
        'design': true,
        'import': {
            'sketch': true,
            'photoshop': true
        },
        'micro': true,
        'navigation': true,
        'sharing': {
            'web': true
        }
    }, {
        'name': 'InVision',
        'url': 'https://www.invisionapp.com/',
        'image': 'img/prototyping/invision.png',
        'platforms': {
            'web': true
        },
        'import': {
            'sketch': true,
            'photoshop': true
        },
        'navigation': true,
        'transition': true,
        'sharing': {
            'web': true
        },
        'fixedHeader': true
    }, {
        'name': 'Marvel',
        'url': 'https://marvelapp.com/',
        'image': 'img/prototyping/marvel.png',
        'platforms': {
            'web': true,
            'iOS': true,
            'android': true
        },
        'design': true,
        'import': {
            'sketch': true
        },
        'navigation': true,
        'transition': true,
        'sharing': {
            'web': true,
            'iOS': true,
            'android': true,
            'appleWatch': true,
            'appleTv': true
            //- HTML
        }
    }, {
        'name': 'Flinto',
        'url': 'https://www.flinto.com/mac',
        'image': 'img/prototyping/flinto.png',
        'platforms': {
            'web': true,
            'iOS': true
        },
        'micro': true,
        'design': true,
        'import': {
            'sketch': true
        },
        'navigation': true,
        'transition': true,
        'sharing': {
            'iOS': true
        },
        'fixedHeader': true
    }, {
        'name': 'Flinto Lite',
        'url': 'https://www.flinto.com/lite',
        'image': 'img/prototyping/flinto-lite.png',
        'platforms': {
            'web': true,
            'iOS': true
        },
        'navigation': true,
        'transition': true,
        'sharing': {
            'iOS': true,
            'android': true
        },
        'fixedHeader': true
    }, {
        'name': 'Axure',
        'url': 'http://www.axure.com/',
        'image': 'img/prototyping/axure.png',
        'platforms': {
            'mac': true,
            'windows': true
        },
        'design': true,
        'micro': true,
        'navigation': true,
        'transition': true,
        'sharing': {
            'web': true
        }
    }, {
        'name': 'Balsamiq',
        'url': 'https://balsamiq.com/',
        'image': 'img/prototyping/basalmiq.png',
        'design': true,
        'platforms': {
            'web': true
        },
        'navigation': true,
        'sharing': {
            'web': true,
            'pdf': true
        }
    }, {
        'name': 'Lucidchart',
        'url': 'https://lucidchart.com/',
        'image': 'img/prototyping/lucidchart.png',
        'design': true,
        'platforms': {
            'web': true
        },
        'navigation': true,
        'sharing': {
            'web': true
        }
    }, {
        'name': 'Adobe XD',
        'url': 'http://www.adobe.com/products/experience-design',
        'image': 'img/prototyping/adobe-xd.png',
        'design': true,
        'platforms': {
            'mac': true
        },
        'navigation': true,
        'transition': true,
        'sharing': {
            'web': true
        }
    }, {
        'name': 'Craft',
        'url': 'http://www.adobe.com/products/experience-design',
        'image': 'img/prototyping/craft.png',
        'platforms': {
            'mac': true
        },
        'sketch': true,
        'navigation': true,
        'transition': true,
        'sharing': {
            'iOS': true
        }
    }, {
        'name': 'Pixate',
        'url': 'http://www.pixate.com/',
        'image': 'img/prototyping/pixate.png',
        'platforms': {
            'mac': true,
        },
        'import': {
            'sketch': true
        },
        'micro': true,
        'navigation': true,
        'transition': true,
        'sharing': {
            'iOS': true,
            'android': true
        }
    }, {
        'name': 'Origami',
        'url': 'https://facebook.github.io/origami/',
        'image': 'img/prototyping/origami.png',
        'plaforms': {
            'mac': true,
        },
        'micro': true,
        'navigation': true,
        'transition': true,
        'sharing': {
            'iOS': true
        }
    }, {
        'name': 'Proto.io',
        'url': 'https://proto.io/',
        'image': 'img/prototyping/proto.io.png',
        'platforms': {
            'web': true,
        },
        'import': {
            'photoshop': true,
            'dropbox': true,
        },
        'sketch': true,
        'design': true,
        'micro': true,
        'navigation': true,
        'transition': true,
        'sharing': {
            'iOS': true,
            'android': true,
            'web': true,
            //- html
        }
    }, {
        'name': 'Moqups',
        'url': 'https://moqups.com/',
        'image': 'img/prototyping/moqups.png',
        'platforms': {
            'web': true,
        },
        'design': true,
        'navigation': true,
        'sharing': {
            'web': true,
            'pdf': true,
        }
    }, {
        'name': 'Atomic.io',
        'url': 'https://atomic.io/',
        'image': 'img/prototyping/atomic.io.png',
        'platforms': {
            'web': true,
        },
        'design': true,
        'micro': true,
        'navigation': true,
        'transition': true,
        'sharing': {
            'web': true,
        }
    }, {
        'name': 'CanvasFlip',
        'url': 'http://canvasflip.com/',
        'image': 'img/prototyping/canvasflip.png',
        'platforms': {
            'web': true,
        },
        'import': {
            'sketch': true,
            'balsamiq': true,
            'camera': true
        },
        // 'micro': only with GIF,
        'navigation': true,
        'transition': true,
        'sharing': {
            'iOS': true,
            'android': true,
            'web': true
        },
        'analytics':true,
        'heatmap':true,
        // fixed header
        // screen overlays
        // timers
    }, {
        'name': 'iRise',
        'url': 'https://www.irise.com/',
        'image': 'img/prototyping/irise.png',
        'design': true,
        'platforms': {
            'web': true,
            'windows': true,
            'mac': true
        },
        'micro': true,
        'data': true,
        'navigation': true,
        'transition': true,
        'sharing': {
            'iOS': true,
            'web': true,
            'windows': true,
            'mac': true
        }
    }, {
        'name': 'Koncept App',
        'url': 'https://konceptapp.com/',
        'image': 'img/prototyping/konceptapp.png',
        'platforms': {
            'web': true
        },
        'navigation': true,
        'transition': true,
        'sharing': {
            'web': true,
        },
        'tasks': true,
        'heatmap': true,
        'analytics':true
    }];

    var filters = [{
        'title': '',
        'show': true,
        'canChange': false
    }, {
        'title': 'Name',
        'show': true,
        'canChange': true,
        'tipText': 'The name of the app'
    }, {
        'title': 'Platform',
        'show': true,
        'canChange': true,
        'tipText': 'The platform for building prototypes'
    }, {
        'title': 'Design',
        'show': true,
        'canChange': true
    }, {
        'title': 'Import',
        'show': true,
        'canChange': true
    }, {
        'title': 'Animations',
        'show': true,
        'canChange': true
    }, {
        'title': 'Navigation',
        'show': true,
        'canChange': true,
    }, {
        'title': 'Transitions',
        'show': true,
        'canChange': true
    }, {
        'title': 'Data',
        'show': true,
        'canChange': true
    }, {
        'title': 'Code',
        'show': true,
        'canChange': true
    }, {
        'title': 'Sharing',
        'show': true,
        'canChange': true
    }, {
        'title': 'Tasks',
        'show': false,
        'canChange': true
    }, {
        'title': 'Analytics',
        'show': false,
        'canChange': true
    }, {
        'title': 'Heatmap',
        'show': false,
        'canChange': true
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