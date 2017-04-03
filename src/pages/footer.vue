<template>
  <div class="footer">
    <section class="tel-wrapper">
      <a href="tel:0755-82328320">
        <img :src="require('../assets/images/tel_btn.jpg')" alt="">
      </a>
    </section>
    <section class="address">
      <img :src="require('../assets/images/foot_add.jpg')" alt="">
      <div class="my-info">
        <div class="my-time">
          <i class="ion-android-time"></i>
          <span>
              <dt><strong>门诊时间（无假日医院）</strong></dt>
              <dt>09:00-19:00</dt>
          </span>
        </div>
        <div class="my-address">
          <i class="ion-ios-location"></i>
          <span>
            <dt><strong>医院地址</strong></dt>
            <dt>罗湖市中心区深南东路3018号<br>祥琪商厦1-5层</dt>
          </span>
        </div>
        <a href="/map">
          <div class="my-map">
            查看地图
          </div>
        </a>
      </div>
      <div class="copyright">
        <p>{{copyRight}}</p>
        <p>{{beian}}</p>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0
  export default {
    data () {
      return {
        icp: []
      }
    },
    computed: {
      copyRight () {
        let str = ''
        this.icp.forEach((item) => {
          if (item.varname === 'cfg_powerby') {
            str = item.value
          }
        })
        return str
      },
      beian () {
        let str = ''
        this.icp.forEach((item) => {
          if (item.varname === 'cfg_beian') {
            str = item.value
          }
        })
        return str
      }
    },
    created () {
      this.$http.get('http://m.0755mingyi.com/api/res.php?action=foot').then((response) => {
        response = response.body
        if (response.status === ERR_OK) {
          this.icp = response.data
        }
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .footer {
    max-width: 640px;
    margin: 0 auto;
    overflow: hidden;
    .tel-wrapper {
      padding: 5px 8px 15px 8px;
    }
    .address {
      position: relative;
      .my-info {
        position: absolute;
        font-size: 0;
        right: 5px;
        top: 30px;
        i {
          display: inline-block;
          width: 23px;
          height: 23px;
          font-size: 24px;
          color: #000;
          font-weight: 900;
          vertical-align: top;
          text-align: center;
        }
        span {
          display: inline-block;
          vertical-align: top;
          font-size: 12px;
          line-height: 16px;
          margin-left: 2px;
        }
        .my-address {
          margin-top: 10px;
        }
        .my-map {
          width: 75px;
          height: 23px;
          background: #333;
          border-radius: 10px;
          color: #fff;
          font-size: 12px;
          text-align: center;
          line-height: 24px;
          margin: 5px 0 0 25px;
        }
      }
    }
    .copyright {
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 9px;
      line-height: 12px;
      color: #c2c2c2;
    }
  }
</style>
