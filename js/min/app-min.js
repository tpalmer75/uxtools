angular.module("uxTools",["ui.router","ngAnimate","uxTools.services","720kb.tooltips"]).config(function(t,l){l.otherwise("/"),t.state("prototyping",{url:"/",templateUrl:"../templates/prototyping.html",controller:"prototypingCtrl"}).state("hand-off",{url:"/hand-off",templateUrl:"../templates/hand-off.html",controller:"prototypingCtrl"}).state("monitoring",{url:"/monitoring",templateUrl:"../templates/monitoring.html",controller:"prototypingCtrl"}).state("usability-testing",{url:"/usability-testing",templateUrl:"../templates/usability-testing.html",controller:"prototypingCtrl"})}).controller("prototypingCtrl",function(t,l,o){t.prototypingTools=o.tools(),t.filters=o.filters(),t.tempFilters=angular.copy(t.filters),t.modalShowing=!1,t.showFiltersModal=function(l){"show"===l?t.modalShowing=!0:"hide"===l&&(t.modalShowing=!1)},t.isFilterVisible=function(l){for(var o=0;o<t.filters.length;o++)if(t.filters[o].title===l)return t.filters[o].show},t.setFilters=function(){o.setFilters(t.tempFilters),l.reload(),t.showFiltersModal=!1}}).directive("fixedHeaderTable",function(t){return{restrict:"A",link:function(l,o){t(function(){$(o).fixedTblHdrLftCol({scroll:{height:"100%",width:"100%"}})},0)}}});