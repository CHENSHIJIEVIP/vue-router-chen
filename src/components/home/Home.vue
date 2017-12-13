<template>
	<div class="home">
		<h1>this is home.vue</h1>
		<p>{{ msg }}</p>
		<div class="boxBtn">
			<!-- <button>ONE</button> -->
		</div>
		<div class="navBox">
			<ul>
				<li><router-link to="/home/one">One</router-link></li>
				<li><router-link to="/home/two">Two</router-link></li>
				<li><router-link to="/home/three">Three</router-link></li>
			</ul>
		</div>
		<div class="boxMain">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Home',
		data(){
			return{
				msg:'welcome to your Home.vue'
			}
		}
	}
</script>
<style>
.home{
	border: 1px solid red;
	height: 100%;
}

/*按钮*/
.home .boxBtn{
	position: relative;
	bottom: 0;
	width: 600px;
	height: 30px;
	border: 1px dashed red;
	margin: 10px auto;
}

.home .navBox{
	background-color: #ffffff;
	height: 30px;
	text-align: center;
	box-shadow: 0 3px 5px;
}

.home .navBox ul{
	line-height: 30px;
    display: inline-block;
}

.home .navBox ul li{
	list-style-type:none;
	float: left;
	padding: 0 5px;
}

.home .navBox ul li a{
	background-color: #35495e;
	width: 100px;
	display: inline-block;
	color: #fff;
}

.home .navBox ul li a:hover { 
  background-color: #b9b9b9; 
  color: #35495e;
}

.home .boxMain{
	width: 95%;
	height: 155px;
	background-color: #ffffff;
	margin: 10px auto;
}

</style>