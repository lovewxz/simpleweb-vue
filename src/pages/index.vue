<template>
  <div class="main-box">
    <swiper-banner :swiper-option="swiperOption">
    </swiper-banner>
    <section class="pro-wrapper">
      <a href="" v-for="(item,index) in classMap">
          <span>
            <img :src="item.icon" alt="" width="50" height="50">
            <h2 class="pro-title">{{item.title}}</h2>
          </span>
      </a>
    </section>
    <section class="sale-wrapper">
      <div class="sale-left">
        <a href="">
          <img :src="require('../assets/images/s1.jpg')" alt="">
        </a>
      </div>
      <div class="sale-right">
        <div class="sale-top">
          <a href="">
            <img :src="require('../assets/images/s2.jpg')" alt="">
          </a>
        </div>
        <div class="sale-bottom">
          <a href="">
            <img :src="require('../assets/images/s3.jpg')" alt="">
          </a>
        </div>
      </div>
    </section>
    <section class="case-box-wrapper">
      <div class="case-title">
        <div class="line"></div>
        <div class="info">美丽案例</div>
        <div class="line"></div>
      </div>
      <tab-case :tab-content="caseList"></tab-case>
      <a href="javascript:void(0);" onclick="openZoosUrl('chatwin');" target="_blank">
        <div class="zx-btn">
          <img :src="require('../assets/images/btn_102.jpg')" alt="" width="266" height="46">
        </div>
      </a>
    </section>
    <section class="oxgirl-box-wrapper">
      <div class="case-title">
        <div class="line"></div>
        <div class="info">{{oxTitle}}</div>
        <div class="line"></div>
      </div>
      <swiper-ox :swiper-option="swiperOxOption"></swiper-ox>
    </section>
    <section class="rush-wrapper">
      <div class="case-title">
        <div class="line"></div>
        <div class="info">限时秒杀</div>
        <div class="line"></div>
      </div>
      <div class="rush-content-wrapper">
        <rush-content></rush-content>
      </div>
    </section>
    <section class="docotor-wrapper">
      <img :src="advList.expert_all | prefix" alt="">
    </section>
    <section class="hospital-info">
      <img :src="require('../assets/images/info.jpg')" alt="">
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import swiperBanner from '@/components/swiperBanner'
  import tabCase from '@/components/tabCase'
  import swiperOx from '@/components/swiperOX'
  import rushContent from '@/components/rushContent'

  const ERR_OK = 0
  const URL = 'http://m.0755mingyi.com'
  export default {
    name: 'index',
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 4500,
          autoplayDisableOnInteraction: false,
          loop: true
        },
        swiperOxOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 3,
          slidesPerGroup: 3,
          slidesPerColumn: 2,
          paginationClickable: true,
          spaceBetween: 5,
          onSlideChangeStart: swiper => {
            this.oxTitle = this.oxTitleMap[swiper.realIndex / 3]
          }
        },
        caseList: [],
        oxTitle: '氧气少女',
        advList: {}
      }
    },
    filters: {
      prefix (item) {
        return URL + item
      }
    },
    components: {
      swiperBanner,
      tabCase,
      swiperOx,
      rushContent
    },
    created () {
      this.$http.get('http://m.0755mingyi.com/api/res.php?action=case').then((response) => {
        response = response.body
        if (response.status === ERR_OK) {
          this.caseList = response.data
        }
      })
      this.$http.get('http://m.0755mingyi.com/api/res.php?action=adv').then((response) => {
        response = response.body
        if (response.status === ERR_OK) {
          this.advList = response.data
        }
      })
      this.oxTitleMap = ['氧气少女', '迷人网红', '都市丽人', '辣妈正传']
      this.classMap = [
        {
          title: '品牌35年',
          icon: require('../assets/images/1.jpg')
        },
        {
          title: '项目大全',
          icon: require('../assets/images/2.jpg')
        },
        {
          title: '优惠活动',
          icon: require('../assets/images/3.jpg')
        },
        {
          title: '变美日记',
          icon: require('../assets/images/4.gif')
        },
        {
          title: '特邀专家',
          icon: require('../assets/images/5.jpg')
        },
        {
          title: '案例征集',
          icon: require('../assets/images/6.jpg')
        },
        {
          title: '秒杀特惠',
          icon: require('../assets/images/7.jpg')
        },
        {
          title: '申请分期',
          icon: require('../assets/images/8.jpg')
        }
      ]
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import '../assets/scss/index.scss';

  .main-box {
    max-width: 640px;
    background: #f7f7f7;
    margin: 0 auto;
    .pro-wrapper {
      padding: 14px 15px 0 15px;
      box-shadow: 0 1px 0 #eee;
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      justify-content: space-between;
      text-align: center;
      > a {
        display: inline-block;
        flex: 0 0 25%;
        margin-bottom: 14px;
        img {
          display: inline-block;
        }
        .pro-title {
          font-size: 14px;
          margin-top: 5px;
          line-height: 1.5;
          color: #333;
          font-weight: 200;
        }
      }
    }
    .sale-wrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      .sale-left {
        border-top: 1px solid #eee;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }
      .sale-right {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        .sale-top {
          border-bottom: 1px solid #eee;
        }
      }
    }
    .case-box-wrapper {
      background: #fff;
      margin-top: 5px;
      box-shadow: 0 1px 0 #eee;
      padding-bottom: 15px;
      @include title();
      .zx-btn {
        width: 266px;
        margin: 0 auto;
      }
    }
    .oxgirl-box-wrapper {
      background-color: #fff;
      box-shadow: 0 1px 0 #eee;
      margin-top: 5px;
      padding: 0 8px 5px 8px;
      @include title();
    }
    .rush-wrapper {
      background: #fff;
      box-shadow: 0 1px 0 #eee;
      margin-top: 5px;
      padding: 0 8px 5px 8px;
      text-align: center;
      @include title();
    }
    .docotor-wrapper {
      margin-top: 5px;
    }
    .hospital-info {
      margin-top: 5px;
    }
  }
</style>
