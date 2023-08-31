<script>
  import AppFooter from './components/AppFooter.vue';
  import AppHeader from './components/AppHeader.vue';
  

  export default{
     name:'App',
     components:{
        AppHeader,
        AppFooter,
     }
  }
</script>

<template>
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>

<style lang="scss">
    @import '../src/styles/general.scss'


</style>
