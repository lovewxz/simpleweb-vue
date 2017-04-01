<template>
  <div class="rush-content">
    <div class="rush-item" v-for="(item,index) in rushContent" :key="item.id">
      <div class="rush-pic">
        <img :src="item.litpic | prefix" alt="">
      </div>
      <div class="rush-desc">
        <h2 class="rush-item-title">{{item.title}}</h2>
        <p class="rush-detail">{{item.rush_desc}}</p>
        <div class="rush-price">¥{{item.rush_price}}</div>
      </div>
      <div class="rush-btn">
        <a href="javascript:void(0);" onclick="openZoosUrl('chatwin');" target="_blank">
          <img :src="require('../assets/images/qg.jpg')" alt="" width="83" height="30">
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0
  const URL = 'http://m.0755mingyi.com'
  export default {
    data () {
      return {
        rushContent: []
      }
    },
    filters: {
      prefix (item) {
        return URL + item
      }
    },
    created () {
      this.$http.get('http://m.0755mingyi.com/api/res.php?action=rush').then((response) => {
        response = response.body
        if (response.status === ERR_OK) {
          this.rushContent = response.data
        }
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .rush-wrapper {
    background: #fff;
    box-shadow: 0 1px 0 #eee;
    margin-top: 5px;
    padding: 0 8px 5px 8px;
    text-align: center;
    .rush-clock {
      display: inline-block;
      font-size: 0;
      position: relative;
      top: -10px;
      i {
        font-size: 20px;
        display: inline-block;
        vertical-align: middle;
        line-height: 20px;
      }
      span {
        margin-left: 3px;
        font-size: 16px;
        display: inline-block;
        vertical-align: middle;
        line-height: 16px;
      }
    }
    .rush-content {
      margin-top: 8px;
      .rush-item {
        padding: 12px 8px 12px 8px;
        border-top: 1px solid #eee;
        display: flex;
        font-size: 0;
        position: relative;
        .rush-pic {
          flex: 0 0 137px;
          width: 137px;
          height: 104px;
          display: inline-block;
        }
        .rush-desc {
          flex: 1;
          margin-left: 20px;
          .rush-item-title {
            font-size: 16px;
            color: #333;
            font-weight: bold;
            text-align: left;
            margin-top: 5px;
          }
        }
        .rush-btn {
          position: absolute;
          bottom: 12px;
          right: 8px;
        }
        .rush-detail {
          font-size: 12px;
          line-height: 16px;
          color: #999;
          text-align: left;
          margin-top: 6px;
          display: -webkit-box!important;
          overflow: hidden;
          text-overflow:ellipsis;
          word-break:break-all;
          box-orient:vertical;
          line-clamp:3;
        }
        .rush-price {
          font-size: 16px;
          color: #ff0000;;
          margin-top: 11px;
          text-align: left;
          font-weight: bold;
        }
      }
    }
  }

</style>
