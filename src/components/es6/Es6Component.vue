<template>
	<div class="es6">
		<h1>this is es6 component!</h1>
		<p>{{logoMsg}}</p>
		<hr>
		<p class="xp">Vuex采用类似全局对象的形式来管理所有组件的公用数据，如果你想想修改这个全局对象的数据？是可以的，但没那么简单，你得按照Vuex提供的方式来修改，不能自己随意用自己的方式来修改。</p>
		<hr>
		<header :logo="logoMsg">Header。vue</header>
	</div>
</template>
<script>
	import Header from './childComponent/Header'

	export default{
		name:'Es6',
		data(){
			return{
				logoMsg:'welcome to your Es6.vue'
			}
		},
		components:{
			Header
		}
	}
</script>
<style>
.es6 .xp{
	color: #42b983;
}
</style>