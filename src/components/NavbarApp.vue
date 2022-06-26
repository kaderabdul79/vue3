<template>
  <div id="wrapper">
    <div class="logo">A.Kader</div>
    <div class="navbar">
        <!-- <a href="">About</a>
        <a href="">About</a>
        <a href="">About</a>
        <a href="">About</a> -->
        <router-link to="/">Home</router-link>
        <!-- <router-link to="/">Facts</router-link> -->
        <router-link to="/about">About</router-link>
        <router-link to="/"><i class="fas fa-plus"></i>Add Board</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name:'NavbarApp'
}
</script>

<style>

</style>