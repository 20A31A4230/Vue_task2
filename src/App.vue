<template>
  <div>
    <Home/>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue';

  export default {
    name: 'App',
    components: {
      Home,
    }
  }
</script>

<style scoped>

</style>
