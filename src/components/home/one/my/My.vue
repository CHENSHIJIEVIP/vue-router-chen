<template>
	<div class="my">
		<h1>this is My.vue</h1>
		<p>{{msg}}</p>
	</div>
</template>
<script>
	export default{
		name:'My',
		data(){
			return{
				msg:'this is One.vue Level 3 routing for My.vue'
			}
		}
	}
</script>
<style></style>