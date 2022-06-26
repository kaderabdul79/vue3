<template>
  <NavbarApp/>
  <div class="routerview">
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'
export default {
  components:{
    NavbarApp:NavbarApp
  }
}
</script>

<style>

</style>