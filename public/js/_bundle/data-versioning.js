const versioningData = {
	columns: [
    {
            "title": "",
            "show": true,
            "canChange": false,
            "tipText": ""
    }, {
            "title": "Name",
            "show": true,
            "canChange": true,
            "tipText": "Name of app"
    }, {
            "title": "Platform",
            "show": true,
            "canChange": true,
            "tipText": "Platform for<br>uploading designs"
    }, {
            "title": "Free",
            "show": true,
            "canChange": true,
            "tipText": "Has a free version"
    }, {
            "title": "Subscription",
            "show": true,
            "canChange": true,
            "tipText": "Cheapest monthly<br>cost"
    }, {
            "title": "Purchase",
            "show": true,
            "canChange": true,
            "tipText": "One time cost"
    }, {
            "title": "Team",
            "show": true,
            "canChange": true,
            "tipText": "Cheapest monthly<br>cost for teams"
    }, {
            "title": "Import",
            "show": true,
            "canChange": true,
            "tipText": "Supported<br>file types"
    }, {
            "title": "Git",
            "show": true,
            "canChange": true,
            "tipText": "Requires understanding<br>of Git"
    }, {
            "title": "Symbols",
            "show": true,
            "canChange": true,
            "tipText": "Works<br>with symbols"
    }, {
            "title": "Documents",
            "show": true,
            "canChange": true,
            "tipText": "Works<br>with documents"
    }, {
            "title": "Branching",
            "show": true,
            "canChange": true,
            "tipText": "Can create<br>branches"
    }, {
            "title": "Preview",
            "show": true,
            "canChange": true,
            "tipText": "Shows preview<br>of designs"
    }, {
            "title": "Compare",
            "show": true,
            "canChange": true,
            "tipText": "Shows versions<br>side by side"
    }, {
            "title": "Comments",
            "show": true,
            "canChange": true,
            "tipText": "Users can comment<br>on designs"
    }, {
            "title": "Sharing",
            "show": true,
            "canChange": true,
            "tipText": "How others<br>can view designs"
    }, {
            "title": "Integrations",
            "show": true,
            "canChange": true,
            "tipText": "Other external apps"
    }
    ],



    tools: [{
        name: "Abstract",
        url: "https://www.goabstract.com?utm_source=uxtools.co&utm_medium=website&utm_campaign=UX%20Tools",
        image: {
            backgroundPosition: "-100 -1000",
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
        git: false,
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
            backgroundPosition: "-500 -1000",
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
        git: true,
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
            backgroundPosition: "-300 -1000",
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
        git: true,
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
            gitlab: true
        }
    }, {
        // Sketch plugin for keeping Atomic systems up to date
        // Can make cool pattern library websites
        name: "Brand.ai",
        url: "https://brand.ai/?utm_source=uxtools.co&utm_medium=website&utm_campaign=UX%20Tools",
        image: {
            backgroundPosition: "-200 -1000",
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
        git: false,
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
        description: "",
        image: {
            backgroundPosition: "0 -1100",
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
        git: false,
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
        // Very similar to Kactus, visual viewer for github
        name: "Git Sketch Plugin",
        url: "http://mathieudutour.github.io/git-sketch-plugin/?utm_source=uxtools.co&utm_medium=website&utm_campaign=UX%20Tools",
        description: "",
        image: {
            backgroundPosition: "-400 -1000",
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
        git: true,
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