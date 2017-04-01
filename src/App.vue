<template>
  <div id="app">
    <v-header></v-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from '@/pages/header'
  import footer from '@/pages/footer'

  export default {
    name: 'app',
    components: {
      'v-header': header,
      'v-footer': footer
    }
  }
</script>

<style>

</style>
