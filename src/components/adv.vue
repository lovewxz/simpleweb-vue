<template>
  <div class="adv-pic">
    <a href="/experts" v-if="isExpert">
      <img :src="adv.expert_all | prefix" alt="">
    </a>
    <a :href="adv.redirecturl" v-else>
      <img :src="adv.art_list_ad | prefix" alt="">
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0
  const URL = 'http://m.0755mingyi.com'
  export default {
    props: {
      isExpert: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        adv: {}
      }
    },
    filters: {
      prefix (item) {
        return URL + item
      }
    },
    created () {
      this.$http.get('http://m.0755mingyi.com/api/res.php?action=adv').then((response) => {
        response = response.body
        if (response.status === ERR_OK) {
          this.adv = response.data
        }
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
