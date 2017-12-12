import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/home/Home'
import VueComponent from '@/components/vue/VueComponent'
import Es6Component from '@/components/es6/es6Component'
import CareerComponent from '@/components/career/careerComponent'

/*import VueComponent from '@components/vue/VueComponent'
import Es6Component from '@components/es6/Es6Component'
import CareerComponent from '@components/career/CareerComponent'*/

Vue.use(Router)

export default new Router({
	routes:[
		{
			path: '/',
			name: 'HelloWorld',
			// component: HelloWorld
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path:'/vue',
			name:'Vue',
			component:VueComponent
		},
		{
			path:'/es6',
			name:'Es6',
			component:Es6Component
		},
		{
			path:'/career',
			name:'Career',
			component:CareerComponent
		}


		// 自定义组件模板
		/*{
			path:'/vue',
			component:VueComponent
		},
		{
			path:'/es6',
			component:Es6Component
		},
		{
			path:'/career',
			component:CareerComponent
		}*/
	]
})