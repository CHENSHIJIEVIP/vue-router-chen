<template>
	<header class="header">
		<div id="logo">{{logo}}</div>
		<ul class="nav">
			<li v-for="item in navs">{{item.li}}</li>
		</ul>
	</header>
</template>
<script>
	export default{
		name:'header',
		data(){
			return{
				navs:[
					{li:'主页'},
					{li:'日志'},
					{li:'说说'},
					{li:'相册'},
					{li:'其他'}
				]
			}
		},
		props:['logo']
	}
</script>
<style></style>