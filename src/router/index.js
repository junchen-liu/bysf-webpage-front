import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		// will match everything
		path: '*',
		component: () => import('../views/404.vue'),
	},
	{
		path: '/',
		name: 'home',
		redirect: '/homepage',
	},
	{
		path: '/homepage',
		name: 'homepage',
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/homepage.vue'),
	},
	{
		path: '/sign-in',
		name: 'sign-sn',
		component: () => import('../views/sign-in.vue'),
	},
	{
		path: '/sign-up',
		name: 'sign-up',
		component: () => import('../views/sign-up.vue'),
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => import('../views/profilepage.vue'),
	},
	{
		path: '/course',
		name: 'course',
		component: () => import('../views/coursepage.vue'),
	},
	{
		path: '/formula',
		name: 'formula',
		component: () => import('../views/formulapage.vue'),
	},
	{
		path: '/calendar',
		name: 'calendar',
		component: () => import('../views/calendarpage.vue'),
	},
	{
		path: '/others',
		name: 'other',
		component: () => import('../views/otherspage.vue'),
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('../views/testpage.vue'),
	}
]
const router = new VueRouter({
	routes:routes
})

export default router
