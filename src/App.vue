<template>
  <div id="jumbo" class="h-100">
    <HeaderApp />
    <router-view></router-view>
    <FooterApp />
  </div>
</template>

<script>
import FooterApp from './components/FooterApp.vue';
import HeaderApp from './components/HeaderApp.vue';
export default {
  name: 'App',
  components: { HeaderApp, FooterApp }
}
</script>

<style lang="scss" scoped></style>