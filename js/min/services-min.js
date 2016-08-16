angular.module("uxTools.services",[]).factory("prototypingFactory",function(){var t=[{name:"Framer",url:"http://framerjs.com/",image:"img/prototyping/framer.png",platforms:{mac:!0},"import":{photoshop:!0,sketch:!0},micro:!0,navigation:!0,transition:!0,data:!0,code:!0,sharing:{web:!0,iOS:!0}},{name:"Principle",url:"http://principleformac.com/",image:"img/prototyping/principle.png",platforms:{mac:!0},"import":{sketch:!0},micro:!0,navigation:!0,transition:!0,sharing:{iOS:!0,mac:!0}},{name:"UX Pin",url:"https://uxpin.com/",image:"img/prototyping/uxpin.png",platforms:{web:!0},design:!0,"import":{sketch:!0,photoshop:!0},micro:!0,navigation:!0,sharing:{web:!0}},{name:"InVision",url:"https://www.invisionapp.com/",image:"img/prototyping/invision.png",platforms:{web:!0},"import":{sketch:!0,photoshop:!0,dropbox:!0},navigation:!0,transition:!0,sharing:{web:!0,pdf:!0,html:!0},fixedHeader:!0,pricing:{free:{tipText:"1 Project"},monthly:{personal:[{price:"$15",tipText:"3 Projects"},{price:"$25",tipText:"Unlimited Projects"}],team:[{price:"$99",tipText:"Unlimited Projects"}],enterprise:[{price:"$--",tipText:"Unlimited everything"}]},annual:{personal:[{price:"$13",tipText:"3 Projects"},{price:"$22",tipText:"Unlimited Projects"}],team:[{price:"$89",tipText:"Unlimited Projects"}],enterprise:[{price:"$--",tipText:"Unlimited everything"}]}}},{name:"Marvel",url:"https://marvelapp.com/",image:"img/prototyping/marvel.png",platforms:{web:!0,iOS:!0,android:!0},design:!0,"import":{sketch:!0,dropbox:!0,camera:!0,googleDrive:!0,box:!0},navigation:!0,transition:!0,sharing:{web:!0,iOS:!0,android:!0,appleWatch:!0,appleTv:!0,html:!0,pdf:!0},pricing:{free:{tipText:"1 Project"},monthly:{personal:[{price:"$10",tipText:"3 Projects"},{price:"$555",tipText:"Unlimited Projects"}],enterprise:[{price:"$--",tipText:"Unlimited everything"}]}}},{name:"Flinto",url:"https://www.flinto.com/mac",image:"img/prototyping/flinto.png",platforms:{web:!0,mac:!0},micro:!0,design:!0,"import":{sketch:!0,dropbox:!0},navigation:!0,transition:!0,sharing:{iOS:!0},fixedHeader:!0},{name:"Flinto Lite",url:"https://www.flinto.com/lite",image:"img/prototyping/flinto-lite.png",platforms:{web:!0},"import":{dropbox:!0},navigation:!0,transition:!0,sharing:{iOS:!0,android:!0},fixedHeader:!0},{name:"Axure",url:"http://www.axure.com/",image:"img/prototyping/axure.png",platforms:{mac:!0,windows:!0},design:!0,micro:!0,navigation:!0,transition:!0,sharing:{web:!0}},{name:"Balsamiq",url:"https://balsamiq.com/",image:"img/prototyping/basalmiq.png",design:!0,platforms:{web:!0},navigation:!0,sharing:{web:!0,pdf:!0}},{name:"Lucidchart",url:"https://lucidchart.com/",image:"img/prototyping/lucidchart.png",design:!0,platforms:{web:!0},navigation:!0,sharing:{web:!0}},{name:"Adobe XD",url:"http://www.adobe.com/products/experience-design",image:"img/prototyping/adobe-xd.png",design:!0,platforms:{mac:!0},navigation:!0,transition:!0,sharing:{web:!0}},{name:"Craft",url:"https://www.invisionapp.com/craft",image:"img/prototyping/craft.png",platforms:{mac:!0},"import":{sketch:!0},navigation:!0,transition:!0,sharing:{iOS:!0}},{name:"Pixate",url:"http://www.pixate.com/",image:"img/prototyping/pixate.png",platforms:{mac:!0},"import":{sketch:!0},micro:!0,navigation:!0,transition:!0,sharing:{iOS:!0,android:!0}},{name:"Origami",url:"https://facebook.github.io/origami/",image:"img/prototyping/origami.png",plaforms:{mac:!0},micro:!0,navigation:!0,transition:!0,sharing:{iOS:!0}},{name:"Proto.io",url:"https://proto.io/",image:"img/prototyping/proto.io.png",platforms:{web:!0},"import":{photoshop:!0,dropbox:!0,sketch:!0},sketch:!0,design:!0,micro:!0,navigation:!0,transition:!0,sharing:{iOS:!0,android:!0,web:!0}},{name:"Moqups",url:"https://moqups.com/",image:"img/prototyping/moqups.png",platforms:{web:!0},design:!0,navigation:!0,sharing:{web:!0,pdf:!0}},{name:"Atomic.io",url:"https://atomic.io/",image:"img/prototyping/atomic.io.png",platforms:{web:!0},"import":{sketch:!0},design:!0,micro:!0,navigation:!0,transition:!0,sharing:{web:!0}},{name:"CanvasFlip",url:"http://canvasflip.com/",image:"img/prototyping/canvasflip.png",platforms:{web:!0},"import":{sketch:!0,balsamiq:!0,dropbox:!0,camera:!0},navigation:!0,transition:!0,sharing:{iOS:!0,android:!0,web:!0},analytics:!0,heatmap:!0},{name:"iRise",url:"https://www.irise.com/",image:"img/prototyping/irise.png",design:!0,platforms:{web:!0,windows:!0,mac:!0},micro:!0,data:!0,navigation:!0,transition:!0,sharing:{iOS:!0,web:!0,windows:!0,mac:!0}},{name:"Koncept App",url:"https://konceptapp.com/",image:"img/prototyping/konceptapp.png",platforms:{web:!0},navigation:!0,transition:!0,sharing:{web:!0},tasks:!0,heatmap:!0,analytics:!0},{name:"Fuse",url:"https://www.fusetools.com/",image:"img/prototyping/fuse.png",platforms:{mac:!0,windows:!0},"import":{sketch:!0},navigation:!0,micro:!0,transition:!0,data:!0,code:!0,sharing:{iOS:!0,android:!0}},{name:"HotGloo",url:"https://www.hotgloo.com/",image:"img/prototyping/hotgloo.png",design:!0,platforms:{web:!0},navigation:!0,micro:!0,sharing:{web:!0,pdf:!0,html:!0}},{name:"Webflow",url:"https://webflow.com/",image:"img/prototyping/webflow.png",design:!0,platforms:{web:!0},navigation:!0,micro:!0,transition:!0,data:!0,sharing:{web:!0,html:!0}},{name:"Demonstrate",url:"http://nfnlabs.in/demonstrate/",image:"img/prototyping/demonstrate.png",platforms:{iOS:!0},"import":{dropbox:!0,camera:!0},navigation:!0,transition:!0,sharing:{iOS:!0}},{name:"Prott",url:"https://prottapp.com/",image:"img/prototyping/prott.png",platforms:{web:!0,mac:!0,iOS:!0,android:!0},design:!0,"import":{sketch:!0,photoshop:!0,camera:!0,dropbox:!0},navigation:!0,transition:!0,sharing:{web:!0,iOS:!0,android:!0}},{name:"Justinmind",url:"http://www.justinmind.com/",image:"img/prototyping/justinmind.png",platforms:{mac:!0,windows:!0},design:!0,navigation:!0,transition:!0,sharing:{web:!0,iOS:!0,android:!0},mobileOnly:!1,responsive:!0},{name:"Notable",url:"http://notable.zurb.com/",image:"img/prototyping/notable.png",platforms:{web:!0},navigation:!0,transition:!0,sharing:{web:!0}}],i=[{title:"",show:!0,canChange:!1},{title:"Name",show:!0,canChange:!0,tipText:"Name of app"},{title:"Platform",show:!0,canChange:!0,tipText:"Platforms used for <br>building prototypes"},{title:"Design",show:!0,canChange:!0,tipText:"App can design<br>from scratch"},{title:"Import",show:!0,canChange:!0,tipText:"Integrations with<br>other apps"},{title:"Animations",show:!0,canChange:!0,tipText:"Individual animations<br>& micro-interactions"},{title:"Transitions",show:!0,canChange:!0,tipText:"Animates between screens"},{title:"Data",show:!0,canChange:!0,tipText:"Uses data to<br>render UI"},{title:"Code",show:!0,canChange:!0,tipText:"Requires knowledge<br>of code"},{title:"Sharing",show:!0,canChange:!0,tipText:"How others can<br>use the prototype"},{title:"Tasks",show:!1,canChange:!0,tipText:""},{title:"Analytics",show:!1,canChange:!0,tipText:"App can track events"},{title:"Heatmap",show:!1,canChange:!0,tipText:"App generates heatmaps<br>from user testing"}];return{tools:function(){return t},filters:function(){return i},setFilters:function(t){i=t}}}).factory("collaborationFactory",function(){var t=[{name:"Zeplin",url:"https://zeplin.io/",image:"img/collaboration/zeplin.png",platforms:{mac:!0,windows:!0},programs:{sketch:!0,photoshop:!0},specs:!0,automatic:!0,assets:!0,measure:!0,variables:!0,guides:!0,comments:!0,sharing:{mac:!0,web:!0,windows:!0},integrations:{slack:!0}},{name:"Avocode",url:"https://avocode.com/",image:"img/collaboration/avocode.png",platforms:{mac:!0,windows:!0,linux:!0},programs:{sketch:!0,photoshop:!0},specs:!0,automatic:!0,assets:!0,measure:!0,variables:!0,guides:!0,layers:!0,comments:!0,revisions:!0,sharing:{mac:!0,windows:!0,linux:!0},integrations:{slack:!0}},{name:"Marketch",url:"https://github.com/tudou527/marketch",image:"img/collaboration/marketch.png",platforms:{mac:!0},programs:{sketch:!0},specs:!0,measure:!0,sharing:{html:!0}},{name:"Sketch Measure",url:"https://github.com/utom/sketch-measure",image:"img/collaboration/sketchmeasure.png",platforms:{mac:!0},programs:{sketch:!0},variables:!0,automatic:!0,assets:!0,specs:!0,measure:!0,sharing:{html:!0}},{name:"Sympli",url:"https://sympli.io/",image:"img/collaboration/sympli.png",platforms:{web:!0},programs:{sketch:!0,photoshop:!0},specs:!0,automatic:!0,assets:!0,measure:!0,variables:!0,guides:!0,layers:!0,comments:!0,revisions:!0,sharing:{web:!0,xcode:!0,androidStudio:!0},integrations:{slack:!0}},{name:"Markly",url:"http://marklyapp.com/",image:"img/collaboration/markly.png",platforms:{mac:!0},programs:{sketch:!0,photoshop:!0},specs:!0,measure:!0,sharing:{web:!0}},{name:"Red Pen",url:"https://redpen.io/",image:"img/collaboration/redpen.png",platforms:{web:!0},comments:!0,revisions:!0,sharing:{web:!0}},{name:"Specctr",url:"https://specctr.com/cloud/home",image:"img/collaboration/specctr.png",platforms:{mac:!0,windows:!0},programs:{photoshop:!0,illustrator:!0,indesign:!0},specs:!0,measure:!0,comments:!0,revisions:!0,sharing:{web:!0}}],i=[{title:"",show:!0,canChange:!1},{title:"Name",show:!0,canChange:!0,tipText:"Name of app"},{title:"Platform",show:!0,canChange:!0,tipText:"Platforms used to <br>upload designs"},{title:"Programs",show:!0,canChange:!0,tipText:"Compatible design programs"},{title:"Specs",show:!0,canChange:!0,tipText:"App creates design <br>specifications"},{title:"Automatic",show:!0,canChange:!0,tipText:"App automatically <br>generates specs"},{title:"Assets",show:!0,canChange:!0,tipText:"Export <br>design assets"},{title:"Measure",show:!0,canChange:!0,tipText:"Measure <br>distance and size"},{title:"Variables",show:!0,canChange:!0,tipText:"Allows custom <br>CSS variables"},{title:"Guides",show:!0,canChange:!0,tipText:"Maintains layout guides <br>from design apps"},{title:"Layers",show:!1,canChange:!0,tipText:"App shows layer tree"},{title:"Comments",show:!0,canChange:!0,tipText:"Viewers can comment <br>on designs"},{title:"Revisions",show:!1,canChange:!0,tipText:"Save versions <br>of files"},{title:"Sharing",show:!0,canChange:!0,tipText:"How users can <br>access designs"},{title:"Integrations",show:!0,canChange:!0,tipText:"Other external apps"}];return{tools:function(){return t},filters:function(){return i},setFilters:function(t){i=t}}}).factory("monitoringFactory",function(){var t=[{name:"Inspectlet",url:"http://www.inspectlet.com/",image:"img/monitoring/inspectlet.png",platforms:{web:!0},playback:!0,heatmaps:!0,tags:!0,location:!0,skipInactivity:!0,playbackSpeed:!0,"export":{html:!0}},{name:"Lucky Orange",url:"http://www.luckyorange.com/",image:"img/monitoring/luckyorange.png",platforms:{web:!0},playback:!0,heatmaps:!0,tags:!0,polls:!0,formAnalytics:!0,location:!0,console:!0,skipInactivity:!0,playbackSpeed:!0},{name:"Fullstory",url:"http://www.fullstory.com/",image:"img/monitoring/fullstory.png",platforms:{web:!0},playback:!0,tags:!0,location:!0,console:!0,skipInactivity:!0,playbackSpeed:!0,jumpBack:!0,taylorChoice:!0},{name:"Hotjar",url:"https://www.hotjar.com/",image:"img/monitoring/hotjar.png",platforms:{web:!0},playback:!0,heatmaps:!0,location:!0,formAnalytics:!0,polls:!0,playbackSpeed:!0,skipInactivity:!0},{name:"MouseStats",url:"https://www.mousestats.com/",image:"img/monitoring/mousestats.png",platforms:{web:!0},playback:!0,heatmaps:!0,formAnalytics:!0,polls:!0,skipInactivity:!0},{name:"UserTrack",url:"https://www.usertrack.net/",image:"img/monitoring/usertrack.png",platforms:{web:!0},playback:!0,heatmaps:!0,location:!0},{name:"Zeerat",url:"https://zeerat.com",image:"img/monitoring/zeerat.png",platforms:{web:!0},playback:!0,heatmaps:!0,location:!0,formAnalytics:!0}],i=[{title:"",show:!0,canChange:!1},{title:"Name",show:!0,canChange:!0,tipText:"Name of app"},{title:"Platform",show:!1,canChange:!0,tipText:"Platform used to<br> view recordings"},{title:"Playback",show:!0,canChange:!0,tipText:"Records user's<br> actions"},{title:"Skip",show:!0,canChange:!0,tipText:"Can skip inactivity<br> during playback"},{title:"Speed",show:!0,canChange:!0,tipText:"Fast-forward<br> & half-speed"},{title:"Jump Back",show:!0,canChange:!0,tipText:"Go back a few seconds<br> in playback (so useful)"},{title:"Console",show:!0,canChange:!0,tipText:"Records JS console<br> during playback"},{title:"Heatmaps",show:!0,canChange:!0,tipText:"Generates heatmap<br> of actions"},{title:"Location",show:!0,canChange:!0,tipText:"Shows visitor's<br> location"},{title:"Form Stats",show:!0,canChange:!0,tipText:"Analyzes form<br> drop off & stats"},{title:"Polls",show:!0,canChange:!0,tipText:"Can create<br> user surveys"},{title:"Export",show:!0,canChange:!0,tipText:"Format for<br> downloaded"}];return{tools:function(){return t},filters:function(){return i},setFilters:function(t){i=t}}});