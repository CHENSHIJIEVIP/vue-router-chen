<template>
	<header class="es6header">
		<div class="logo">{{logo}}</div>
		<div class="nav">
			<ul>
				<li v-for="item in navs"><a href="">{{item.li}}</a></li>
			</ul>
		</div>
	</header>
</template>
<script>
	export default{
		name:'es6header',
		data(){
			return{
				navs:[
					{li:'主页'},
					{li:'日志记录[不换行，隐藏显示省略号]'},
					{li:'说说'},
					{li:'留言板'},
					{li:'相册'}
				]
			}
		},
		props:['logo']
	}
</script>
<style>
	.es6header{
	}

	.es6header .logo{
		color: red;
		font-weight: bold;
	}

	.es6header .nav{
		width: 800px;
		margin: 0 auto;
		box-shadow: 0 3px 5px red;
	}

	.es6header ul{
		margin: 0 auto;
		height: inherit;
		border: 1px solid blue;
	}
	
	.es6header .nav li{
		list-style: none;
		float: left;
		width: 20%;
	}

	.es6header .nav li a{
		width: 100%;
		white-space: nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		/*word-break:break-all;*/
	}

</style>