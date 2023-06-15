<template>
  <HeaderApp/>
  <router-view></router-view>
  <FooterApp/>
</template>

<script>
import FooterApp from './components/FooterApp.vue';
import HeaderApp from './components/HeaderApp.vue';
export default {
  name: 'App',
  components: { HeaderApp, FooterApp }
}
</script>

<style lang="scss" scoped>

</style>