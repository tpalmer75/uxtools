const versioningData = {
	columns: [
    {
            "title": "",
            "show": true,
            "canChange": false,
            "tipText": ""
    }, {
            "title": Name,
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
            "title": Subscription,
            "show": true,
            "canChange": true,
            "tipText": "Cheapest monthly<br>payment"
    }, {
            "title": Purchase,
            "show": true,
            "canChange": true,
            "tipText": "One time cost"
    }
    ],



    tools: [{
        name: "Abstract",
        url: "https://www.goabstract.com?utm_source=uxtools.co&utm_medium=website&utm_campaign=UX%20Tools",
        image: {
            background-position: "-200 0",
        },
        platforms: {
            mac: true
        },
        pricing: {
            free: true,
            subscription: "$9+",
            purchase: "",
            team: "$21+"
        },
        import: {
            sketch: true,
        },
        symbols: true,
        documents: true,
        branching: true,
        preview: true,
        compare: true,
        comments: true,
        sharing: {
            web: true,
        },
        integrations: {
            slack: true,
        }
    }, {
        // Deconstructs the new Sketch file format to be easily consumable with Github. It's just a fork of Github Desktop, but make Sketch files viewable and manageable.
        name: "Kactus",
        url: "http://kactus.io/?utm_source=uxtools.co&utm_medium=website&utm_campaign=UX%20Tools",
        image: {
            background-position: "-200 0",
        },
        platforms: {
            mac: true
        },
        pricing: {
            free: true,
            purchase: "$99"
        },
        import: {
            sketch: true,
        },
        symbols: true,
        documents: true,
        branching: true,
        preview: true,
        compare: true,
        comments: false,
        sharing: {
            web: false,
        },
        integrations: {
            slack: false,
        }
    }, {
        // Similar concept, a visual viewer for git repos
        name: "Folio",
        url: "http://folioformac.com/?utm_source=uxtools.co&utm_medium=website&utm_campaign=UX%20Tools",
        image: {
            background-position: "-200 0",
        },
        platforms: {
            mac: true
        },
        pricing: {
            free: false,
            purchase: "$49",
            subscription: "",
            team: ""
        },
        import: {
            sketch: true,
            photoshop: true,
            illustrator: true
        },
        symbols: true,
        documents: true,
        branching: true,
        preview: true,
        compare: false,
        comments: false,
        sharing: {
            web: false, //technically, you could view them in the Git repo
            mac: true, //through the free Folio viewer app
        },
        integrations: {
            slack: false,
            "gitlab": true
        }
    }, {
        // Sketch plugin for keeping Atomic systems up to date
        // Can make cool pattern library websites
        name: "Brand.ai",
        url: "https://brand.ai/?utm_source=uxtools.co&utm_medium=website&utm_campaign=UX%20Tools",
        image: {
            background-position: "-200 0",
        },
        platforms: {
            mac: true
        },
        pricing: {
            free: false,
            purchase: "",
            subscription: "",
            team: ""
        },
        import: {
            sketch: true,
            photoshop: true,
            illustrator: true
        },
        symbols: true,
        documents: false,
        branching: false,
        preview: true,
        compare: false,
        comments: false,
        sharing: {
            web: true, 
            mac: true, 
        },
        integrations: {
        }
    }, {
        // Sketch plugin for keeping Atomic systems up to date
        // Can make cool pattern library websites
        name: "Plant",
        url: "https://plantapp.io/?utm_source=uxtools.co&utm_medium=website&utm_campaign=UX%20Tools",
        description: ""
        image: {
            background-position: "-200 0",
        },
        platforms: {
            mac: true
        },
        pricing: {
            free: true,
            purchase: "",
            subscription: "",
            team: ""
        },
        import: {
            sketch: true,
        },
        symbols: false,
        documents: false,
        branching: false,
        preview: true,
        compare: false,
        comments: false,
        sharing: {
            mac: true, 
        },
        integrations: {
        }
    }, {
        // Sketch plugin for keeping Atomic systems up to date
        // Can make cool pattern library websites
        name: "Git Sketch Plugin",
        url: "http://mathieudutour.github.io/git-sketch-plugin/?utm_source=uxtools.co&utm_medium=website&utm_campaign=UX%20Tools",
        description: ""
        image: {
            background-position: "-200 0",
        },
        platforms: {
            mac: true
        },
        pricing: {
            free: true,
            purchase: "",
            subscription: "",
            team: ""
        },
        import: {
            sketch: true,
        },
        symbols: false,
        documents: true,
        branching: false,
        preview: true,
        compare: false,
        comments: true,
        sharing: {
            mac: true,
            web: true 
        },
        integrations: {
        }
    }]

}

