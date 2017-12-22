<template>
	<div class="one">
		<h1>this is One.vue</h1>
		<p>{{msg}}</p>
		<hr>
		<div class="oneNav">
			<router-link to="/home/one/oh" tag="p">Oh</router-link>
			<router-link to="/home/one/my" tag="p">My</router-link>
			<router-link to="/home/one/god" tag="p">God</router-link>
		</div>
		<div class="oneBox">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		name:'One',
		data(){
			return{
				msg:'this is a secondary pages One.vue'
			}
		}
	}
</script>
<style>
	.one .oneNav{
		width: 10%;
		float: left;
	}

	.one .oneNav p{
		height: 35px;
		line-height: 35px;
		background-color: #42b983;
		color: #fff;
		cursor: pointer;
	}

	.one .oneNav p:nth-child(2){
		border-top: 1px solid #fff;
		border-bottom: 1px solid #fff;
	}

	.one .oneNav p:hover { 
	  	background-color: #b9b9b9; 
	  	color: #35495e;
	}

	.one .oneBox{
		background-color: yellow;
		width: 90%;
		height: 105px;
		float: left;
	}

</style>