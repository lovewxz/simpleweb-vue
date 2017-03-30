<template>
  <div id="app">
    <v-header></v-header>
    <index></index>
  </div>
</template>

<script>
  import header from '@/pages/header'
  import index from '@/pages/index'
  export default {
    name: 'app',
    components: {
      'v-header': header,
      index
    }
  }
</script>

<style>

</style>
