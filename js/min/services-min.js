angular.module("uxTools.services",[]).factory("prototypingFactory",function(){var i=[{name:"Framer",url:"http://framerjs.com/",image:"img/prototyping/framer.png",platforms:{mac:!0},"import":{photoshop:!0,sketch:!0},micro:!0,navigation:!0,transition:!0,data:!0,code:!0,sharing:{web:!0}},{name:"Principle",url:"http://principleformac.com/",image:"img/prototyping/principle.png",platforms:{mac:!0},"import":{sketch:!0},micro:!0,navigation:!0,transition:!0,sharing:{iOS:!0,mac:!0}},{name:"UX Pin",url:"https://uxpin.com/",image:"img/prototyping/uxpin.png",platforms:{web:!0},design:!0,"import":{sketch:!0,photoshop:!0},micro:!0,navigation:!0,sharing:{web:!0}},{name:"InVision",url:"https://www.invisionapp.com/",image:"img/prototyping/invision.png",platforms:{web:!0},"import":{sketch:!0,photoshop:!0},navigation:!0,transition:!0,sharing:{web:!0},fixedHeader:!0},{name:"Marvel",url:"https://marvelapp.com/",image:"img/prototyping/marvel.png",platforms:{web:!0,iOS:!0,android:!0},design:!0,"import":{sketch:!0},navigation:!0,transition:!0,sharing:{web:!0,iOS:!0,android:!0,appleWatch:!0,appleTv:!0}},{name:"Flinto",url:"https://www.flinto.com/mac",image:"img/prototyping/flinto.png",platforms:{web:!0,iOS:!0},micro:!0,design:!0,"import":{sketch:!0},navigation:!0,transition:!0,sharing:{iOS:!0},fixedHeader:!0},{name:"Flinto Lite",url:"https://www.flinto.com/lite",image:"img/prototyping/flinto-lite.png",platforms:{web:!0,iOS:!0},navigation:!0,transition:!0,sharing:{iOS:!0,android:!0},fixedHeader:!0},{name:"Axure",url:"http://www.axure.com/",image:"img/prototyping/axure.png",platforms:{mac:!0,windows:!0},design:!0,micro:!0,navigation:!0,transition:!0,sharing:{web:!0}},{name:"Balsamiq",url:"https://balsamiq.com/",image:"img/prototyping/basalmiq.png",design:!0,platforms:{web:!0},navigation:!0,sharing:{web:!0,pdf:!0}},{name:"Lucidchart",url:"https://lucidchart.com/",image:"img/prototyping/lucidchart.png",design:!0,platforms:{web:!0},navigation:!0,sharing:{web:!0}},{name:"Adobe XD",url:"http://www.adobe.com/products/experience-design",image:"img/prototyping/adobe-xd.png",design:!0,platforms:{mac:!0},navigation:!0,transition:!0,sharing:{web:!0}},{name:"Craft",url:"http://www.adobe.com/products/experience-design",image:"img/prototyping/craft.png",platforms:{mac:!0},sketch:!0,navigation:!0,transition:!0,sharing:{iOS:!0}},{name:"Pixate",url:"http://www.pixate.com/",image:"img/prototyping/pixate.png",platforms:{mac:!0},"import":{sketch:!0},micro:!0,navigation:!0,transition:!0,sharing:{iOS:!0,android:!0}},{name:"Origami",url:"https://facebook.github.io/origami/",image:"img/prototyping/origami.png",plaforms:{mac:!0},micro:!0,navigation:!0,transition:!0,sharing:{iOS:!0}},{name:"Proto.io",url:"https://proto.io/",image:"img/prototyping/proto.io.png",platforms:{web:!0},"import":{photoshop:!0,dropbox:!0},sketch:!0,design:!0,micro:!0,navigation:!0,transition:!0,sharing:{iOS:!0,android:!0,web:!0}},{name:"Moqups",url:"https://moqups.com/",image:"img/prototyping/moqups.png",platforms:{web:!0},design:!0,navigation:!0,sharing:{web:!0,pdf:!0}},{name:"Atomic.io",url:"https://atomic.io/",image:"img/prototyping/atomic.io.png",platforms:{web:!0},design:!0,micro:!0,navigation:!0,transition:!0,sharing:{web:!0}},{name:"CanvasFlip",url:"http://canvasflip.com/",image:"img/prototyping/canvasflip.png",platforms:{web:!0},"import":{sketch:!0,camera:!0},micro:!0,navigation:!0,transition:!0,sharing:{iOS:!0,android:!0,web:!0}},{name:"iRise",url:"https://www.irise.com/",image:"img/prototyping/irise.png",design:!0,platforms:{web:!0,windows:!0,mac:!0},micro:!0,data:!0,navigation:!0,transition:!0,sharing:{iOS:!0,web:!0,windows:!0,mac:!0}}],t=[{title:"",show:!0,canChange:!1},{title:"Name",show:!0,canChange:!0},{title:"Platform",show:!0,canChange:!0},{title:"Design",show:!0,canChange:!0},{title:"Import",show:!0,canChange:!0},{title:"Animations",show:!0,canChange:!0},{title:"Navigation",show:!0,canChange:!0},{title:"Transitions",show:!0,canChange:!0},{title:"Data",show:!0,canChange:!0},{title:"Code",show:!0,canChange:!0},{title:"Sharing",show:!0,canChange:!0}];return{tools:function(){return i},filters:function(){return t},setFilters:function(i){t=i}}});