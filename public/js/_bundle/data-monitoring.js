const monitoringData = {
	tools: [{
		"name": "Inspectlet",
		"url": "http://www.inspectlet.com/",
		"image": {
			"background-position": "-100 -200",
		},
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
			"subscription": "$39+"
		}
	}, {
		"name": "Lucky Orange",
		"url": "http://www.luckyorange.com/",
		"image": {
			"background-position": "0 -300",
		},
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
			"subscription": "$10+"
		},
		"export": {},
		// can watch live sessions
		// can show trending referrers
		// can show trending tweets
		// can see global map of locations
	}, {
		"name": "Fullstory",
		"url": "http://www.fullstory.com/",
		"image": {
			"background-position": "-300 -100",
		},
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
			"subscription": "$199+"
		},
		"export": {},
		// Can search according the the html element a user clicked
		// can watch live sessions
	}, {
		"name": "Hotjar",
		"url": "https://www.hotjar.com/",
		"image": {
			"background-position": "0 -200",
		},
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
			"subscription": "$29+"
		},
		"export": {},
		// host custom surveys like Qualtrics
	}, {
		"name": "MouseStats",
		"url": "https://www.mousestats.com/",
		"image": {
			"background-position": "-400 -100",
		},
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
			"subscription": "$29+"
		},
		"export": {},
	}, {
		"name": "UserTrack",
		"url": "https://www.usertrack.net/",
		"image": {
			"background-position": "-200 -200",
		},
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
		},
		"export": {},
	}, {
		"name": "Zeerat",
		"url": "https://zeerat.com",
		"image": {
			"background-position": "-300 -200",
		},
		"platforms": {
			"web": true
		},
		"playback": true,
		"heatmaps": true,
		"location": true,
		"formAnalytics": true,
		"pricing": {
			"free": false,
			"subscription": "$40+"
		},
		"export": {},
	}, {
		"name": "Jaco",
		"url": "http://www.getjaco.com/",
		"image": {
			"background-position": "-400 -200",
		},
		"platforms": {
			"web": true
		},
		"playback": true,
		"tags": false,
		"location": false,
		"console": false,
		"skipInactivity": true,
		"playbackSpeed": true,
		"pricing": {
			"free": false,
			"subscription": "$39+"
		},
		"export": {},
		// Can search according the the html element a user clicked
		// can watch live sessions
	}, {
		"name": "Smartlook",
		"url": "https://www.smartlook.com/",
		"image": {
			"background-position": "-400 -800",
		},
		"platforms": {
			"web": true
		},
		"playback": true,
		"tags": false,
		"location": true,
		"console": false,
		"skipInactivity": true,
		"playbackSpeed": true,
		"jumpBack": true,
		"pricing": {
			"free": true,
			"subscription": "$16+"
		},
		"export": {},
		// Can search according the the html element a user clicked
		// can watch live sessions
	}, {
		"name": "Zarget",
		"url": "https://zarget.com",
		"image": {
			"background-position": "0 -1000",
		},
		"platforms": {
			"web": true
		},
		"playback": true,
		"tags": false,
		"location": false,
		"heatmaps": true,
		"console": false,
		"skipInactivity": false,
		"playbackSpeed": false,
		"formAnalytics": true,
		"jumpBack": false,
		"polls": true,
		"pricing": {
			"free": false,
			"subscription": "$44+"
		},
		"export": {},
	}],

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
	}]
};