angular.module("uxLibrary",[]).controller("booksCtrl",function(o,t){o.books=t.books()}).factory("booksFactory",function(){var o=[{name:"Inspectlet",url:"http://www.inspectlet.com/",image:{"background-position":"-100 -200"},platforms:{web:!0},playback:!0,heatmaps:!0,tags:!0,location:!0,skipInactivity:!0,playbackSpeed:!0,export:{html:!0},pricing:{free:!0,subscription:"$39"}}];return{books:function(){return o}}});