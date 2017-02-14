// @codekit-prepend "_bundle/tether-1.4.0.js"
// @codekit-prepend "_bundle/tether-drop-.1.4.1.js"
// @codekit-prepend "_bundle/tether-tooltip-1.1.0.js"
// @codekit-prepend "_bundle/v-tooltip@1.1.2.js"
// @not "_bundle/vue-tooltip@0.1.0.js"

// @codekit-prepend "_dev/vue-2.1.10.js"
// @NOT YET codekit-prepend "_bundle/vue-2.1.10.min.js"
// @codekit-prepend "_bundle/vue-router-2.2.0.js"

// @codekit-prepend "_bundle/data-design.js"

Vue.use(VTooltip)

const designComp = {
	template: '#design-tools',
	//props: ['compData'],
	data: function () {
    	return {
    		designData: designData,
    		scroll: 0
    	}
	},
	methods: {
		alert: function() {
			alert('hello');
		}
	}
}
// const Bar = {
// 	template: '<button @click="test()">{{name}}</button>',
// 	data: function() {

// 	},
// 	methods: {
// 		test: function() {
// 			alert('hello');
// 		}
// 	},
// 	//props: [data]

// }

const router = new VueRouter({
	routes: [
		{ 
			path: '/design', 
			component: designComp,
			//props: { compData: designData }
		}, 
		// { 
		// 	path: '/bar', 
		// 	component: Bar,
		// 	//props: {'data': data}
		// },
	]
})

const app = new Vue({
	router: router,
    el: '#tools',
    data: function() {
    	return {
    		showMenu: false,
    		designData: designData,
    		name: 'foo'
    	}
    }
})

