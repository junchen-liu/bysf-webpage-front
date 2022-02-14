import Vue from 'vue'
import VueRouter from 'vue-router'
import OthersArticleCard from "@/views/page-components/OthersArticleCard";

Vue.use(VueRouter)

let routes = [
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
		children:[
			{
				name:'profile',
				path:'profile',
				component:() => import("../views/page-components/my/profile"),
				children:[
					{
						name:'information',
						path:'information',
						component:() => import("../views/page-components/my/CardProfileInformation"),
					},
					{
						name:'setting',
						path:'setting',
						component:() => import("../views/page-components/my/CardProfileInfoSetting"),
					},
				]
			},
			{
				name:'schedule',
				path:'schedule',
				component:() => import("../views/page-components/my/schedule"),
			},
			{
				name:'favorites',
				path:'favorites',
				component:() => import("../views/page-components/my/favorites"),
			},
			{
				name:'vip-service',
				path:'vip-service',
				component:() => import("../views/page-components/my/vip-service"),
			}
		]
	},
	{
		path: '/course',
		name: 'course',
		component: () => import('../views/coursepage.vue'),
		children:[
			{
				name:'course-detail',
				path:'content',
				component:() => import("../views/page-components/CourseDetail.vue"),
			},
		]
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
		children:[
			{
				name:'article-detail',
				path:'detail',
				component:OthersArticleCard,
			},
			{
				name:'article-content',
				path:'content',
				component:() => import("../views/page-components/Article"),
			},
			]
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('../views/testpage.vue'),
	}
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;

	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;


const router = new VueRouter({
	routes:routes
})

export default router
