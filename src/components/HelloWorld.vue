<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->

    <!-- <div class="nav">
        <a>简易vue</a>
        <a>趣味ES6</a>
        <a>人在职场</a>
    </div>
    
    <div class="content"></div> -->

    <div class="nav">
      <router-link to="/home">
        Home
      </router-link>

      <router-link to="/vue">
        简易vue
      </router-link>

      <router-link to="/es6">
        趣味ES6
      </router-link>

      <router-link to="/career">
        人在职场
      </router-link>

    </div>

    <div class="content">
       <router-view></router-view>
    </div>

  </div>
</template>

<script>
/*export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}*/

// 自定义组件模板
/*const vueComponent = {
  template:`<div>
    这里是vue组件！
  </div>`
};
const es6Component = {
  template:`<div>
    this is es6 component!
  </div>`
};
const careerComponent = {
  template:`<div>
    this is career component!
  </div>`
};*/


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */

.nav{
  /*border: 1px solid #35495e;*/
  background-color: #35495e;
  text-align: center;
  height: 30px;
  line-height: 30px;
}

a{
  color: #42b983;
  transition: 0.5s;
  text-decoration: none;
  display: inline-block;
  width: 100px;
}

a:hover { 
  background-color: #b9b9b9; 
}

h1{
    color: red;
    font-size: 24px;
}

.content{
  background-color: #e6e6e6;
  width: 1000px;
  height: 300px;
  margin: 0 auto;
}

</style>
