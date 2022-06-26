<template>
  <div id="wrapper">
    <div class="logo">A.Kader</div>
    <div class="navbar">
        <router-link v-for="(link,index) of links" :to="link.path" :key="index" :class="{active: link.path == $route.path}">{{link.name}}</router-link>
        <button><i class="fas fa-plus"></i>Add Board</button>
    </div>
  </div>
</template>

<script>
export default {
    name:'NavbarApp',
    data(){
      return {
        links:[
          {
            name:'home',
            path:'/'
          },
          {
            name:'about',
            path:'/about'
          },
          {
            name:'facts',
            path:'/facts'
          },
        ]
      }
    }
}
</script>

<style>

</style>