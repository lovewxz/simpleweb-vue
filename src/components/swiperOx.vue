<template>

  <swiper :options="swiperOption" ref="oxSwiper">
    <swiper-slide v-for="(item,index) in litpic" :key="item.id">
      <img :src="item | prefix" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0
  const URL = 'http://m.0755mingyi.com'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    props: {
      swiperOption: {
        type: Object
      }
    },
    data () {
      return {
        slideContent: []
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      },
      litpic () {
        let temp = []
        this.slideContent.forEach((item) => {
          item.article.forEach((article) => {
            temp.push(article.litpic)
          })
        })
        return temp
      }
    },
    filters: {
      prefix (item) {
        return URL + item
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    created () {
      this.$http.get('http://m.0755mingyi.com/api/res.php?action=hot').then((response) => {
        response = response.body
        if (response.status === ERR_OK) {
          this.slideContent = response.data
        }
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
