<template>
	<div class="vue">
		<h1>这里是vue组件！</h1>
		<p>{{msg}}</p>
		<hr>
		<div class="box">
			<button class="btn" @click="showChange" v-model="showInner">切换</button>
			<div class="outer">
				<transition name="inner">
					<div class="inner" v-show="showInner">
						i am the innerBox
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Vue',
		data(){
			return{
				msg:'welcome to your Vue.vue',
				showInner:false
			}
		},
		methods:{
			showChange(){
				this.showInner = !this.showInner
			}
		}
	}
</script>
<style>
	.vue .box{
		background-color: #f0f0f0;
		width: 250px;
		height: 240px;
		margin: 5px auto;

	}

	.vue .btn{
		border-style: none;
		cursor: pointer;
		width: 80px;
		height: 30px;
		background-color: #20b060;
		color:#fff;
		border-radius: 5px;
		margin: 5px 0;
	}

	.vue .outer{
		width: 200px;
		height: 190px;
		background-color: #e0e0e0;
		margin: 0 auto;
	}

	.vue .inner{
		width: 100%;
		height: 100%;
		background-color: #f08080;
		text-align: center;
		line-height: 190px;
		color:#Fff;
	}

	.inner-enter-active,.inner-leave-active{
		transition:all .8s;
	}

	.inner-enter{
		opacity:0;
		margin-left: 100%;
	}

	.inner-leave-active{
		opacity: 0;
		margin-left: 100%;
	}
	
</style>