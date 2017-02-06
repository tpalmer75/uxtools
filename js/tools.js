// @codekit-prepend "_dev/vue-2.1.10.js"
// @NOT YET codekit-prepend "_bundle/vue-2.1.10.min.js"
// @codekit-prepend "_bundle/vue-router-2.2.0.js"

const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}

const routes = [
	{ path: '/foo', component: Foo},
	{ path: '/bar', component: Bar},
]

const router = new VueRouter({
	routes: routes
})

const app = new Vue({
	router: router,
    el: '#tools',
    data: {
    	showMenu: false,
    }
})