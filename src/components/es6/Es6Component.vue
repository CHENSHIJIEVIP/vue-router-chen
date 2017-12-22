<template>
	<div class="es6">
		<h1>this is es6 component!</h1>
		<p>{{msg}}</p>
		<hr>
		<p class="xp">Vuex采用类似全局对象的形式来管理所有组件的公用数据，如果你想想修改这个全局对象的数据？是可以的，但没那么简单，你得按照Vuex提供的方式来修改，不能自己随意用自己的方式来修改。</p>
		<hr>
		<v-es6Header :logo="logoMsg"></v-es6Header>
	</div>
</template>
<script>
	/*导入子组件*/
	import es6Header from './childComponent/es6Header'

	export default{
		name:'Es6',
		data(){
			return{
				msg:'welcome to your Es6.vue',
				logoMsg:'this is fatherComponent'
			}
		},
		components:{
			'v-es6Header':es6Header
		}
	}
</script>
<style>
.es6 .xp{
	color: #42b983;
}
</style>