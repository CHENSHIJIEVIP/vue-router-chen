import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/home/Home'
import VueComponent from '@/components/vue/VueComponent'
import Es6Component from '@/components/es6/es6Component'
import CareerComponent from '@/components/career/careerComponent'

import HomeOne from '@/components/home/one/One'
import HomeTwo from '@/components/home/two/Two'
import HomeThree from '@/components/home/three/Three'

import OneOh from '@/components/home/one/oh/Oh'
import OneMy from '@/components/home/one/my/My'
import OneGod from '@/components/home/one/god/God'

/*import VueComponent from '@components/vue/VueComponent'
import Es6Component from '@components/es6/Es6Component'
import CareerComponent from '@components/career/CareerComponent'*/

Vue.use(Router)
export default new Router({
	mode: 'history',
	routes:[
		{
			path: '/',
			name: 'HelloWorld',
			// component: HelloWorld
			redirect:'/home'
		},
		{
			path: '/home',
			name: 'Home',
			component: Home,
			redirect:'/home/one',
			children:[
				{
					path:'one',
					name:'One',
					component:HomeOne,
					redirect:'/home/one/oh',
					children:[
						{
							path:'oh',
							name:'Oh',
							component:OneOh
						},
						{
							path:'my',
							name:'My',
							component:OneMy
						},
						{
							path:'god',
							name:'God',
							component:OneGod,
						}
					]
				},
				{
					path:'two',
					name:'Two',
					component:HomeTwo
				},
				{
					path:'three',
					name:'Three',
					component:HomeThree
				}
			]
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