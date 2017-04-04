<template>
  <div class="case-content-wrapper">
    <div class="tab-case">
      <router-link class="more" to="/case">更多</router-link>
      <span class="tab-item" v-for="(item,index) in tab" :key="item.id" :class="{on:index === pageNum}"
            @click="slideTo(index)">{{item}}</span>
    </div>
    <swiper :options="swiperOption" ref="swiperCon" class="case-wrapper">
      <swiper-slide v-for="(item,index) in tabContent" :key="item.id" class="case-item">
        <div class="case-detail">
          <div class="case-pic">
            <div class="pic-left">
              <img :src="item.casebefore | prefix" alt="">
            </div>
            <div class="pic-right">
              <img :src="item.caseafter | prefix" alt="">
            </div>
          </div>
          <div class="case-reply">
            <div class="case-head">
              <div class="head-img">
                <img :src="item.litpic | prefix" alt="">
              </div>
              <span class="head-name">{{item.title}}</span>
            </div>
            <div class="case-detail-content">
              {{item.caseintroduce}}
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  const URL = 'http://m.0755mingyi.com'

  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    props: {
      tabContent: {
        type: Array,
        default () {
          return []
        }
      }
    },
    computed: {
      tab () {
        let temp = []
        this.tabContent.forEach((item) => {
          temp.push(item.typename)
        })
        return temp
      },
      swiper () {
        return this.$refs.swiperCon.swiper
      }
    },
    data () {
      return {
        swiperOption: {
          initialSlide: 1,
          autoplayDisableOnInteraction: false,
          notNextTick: true,
          loop: true,
          autoplay: 5000,
          onSlideChangeStart: swiper => {
            this.pageNum = swiper.realIndex
          }
        },
        pageNum: 0
      }
    },
    methods: {
      slideTo (index) {
        return this.swiper.slideTo(index + 1)
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
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .case-content-wrapper {
    position: relative;
    .case-item {
      .case-detail {
        padding: 0 10px;
        margin: 10px 0;
        .case-pic {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .pic-left {
            flex: 1;
            margin-right: 8px;
          }
          .pic-right {
            flex: 1;
          }
        }
        .case-reply {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 8px;
          .case-head {
            flex: 0 0 70px;
            width: 70px;
            margin-right: 8px;
            text-align: center;
            font-size: 0;
            .head-img {
              display: inline-block;
              vertical-align: middle;
              width: 32px;
              height: 32px;
              border-radius: 50%;
            }
            .head-name {
              display: inline-block;
              vertical-align: middle;
              color: #333;
              font-size: 14px;
              margin-left: 4px;
            }
          }
          .case-detail-content {
            flex: 1;
            font-size: 12px;
            line-height: 16px;
            margin-top: 5px;
            text-align: left;
            color: #555;
            font-weight: 400;
          }
        }
      }
    }
    .tab-case {
      display: flex;
      overflow: hidden;
      justify-content: space-between;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding: 10px 40px 10px 5px;
      font-size: 0px;
      position: relative;
      .tab-item {
        display: inline-block;
        flex: 1;
        color: #d3d3d3;
        font-size: 14px;
        text-align: center;
        &.on {
          color: #333;
        }
      }
      .more {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 14px;
        color: #d3d3d3;
      }
    }
  }
</style>
