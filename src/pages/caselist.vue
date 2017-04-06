<template>
  <div class="case-box">
    <adv :is-expert="false"></adv>
    <div class="case-list">
      <div class="case-item" v-for="item in caseList">
        <div class="case-top">
          <div class="case-headimg">
            <img v-lazy="item.litpic" alt="" width="38" height="38">
          </div>
          <span class="case-name">{{item.title}}</span>
        </div>
        <div class="case-img">
          <div class="case-before">
            <img v-lazy="item.casebefore" alt="">
          </div>
          <div class="case-after">
            <img v-lazy="item.caseafter" alt="">
          </div>
        </div>
        <p class="case-content">
          {{item.caseintroduce}}
        </p>
        <div class="case-tag">
          <i class="ion-pricetag"></i>
          <span class="tag-name" v-for="tag in item.tag">{{tag.tag}}</span>
        </div>
        <router-link :to="{name:'casearc',params:{id:item.id}}" :key="item.id">
          <div class="case-btn">
            详情
          </div>
        </router-link>
      </div>
      <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="spiral" :distance="distance">
          <span slot="no-more">
            没有更多案例了
          </span>
      </infinite-loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import adv from '@/components/adv'
  import InfiniteLoading from 'vue-infinite-loading'

  const URL = 'http://m.0755mingyi.com'
  const api = URL + '/api/res.php?action=caselist'
  const ERR_OK = 0

  export default {
    data () {
      return {
        caseList: [],
        num: 5,
        distance: 10
      }
    },
    methods: {
      onInfinite () {
        this.$http.get(api, {
          params: {
            page: this.caseList.length / this.num + 1,
            num: this.num
          }
        }).then((res) => {
          res = res.body
          if (res.data && res.data.length && res.status === ERR_OK) {
            this.caseList = this.caseList.concat(res.data)
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
          }
        })
      }
    },
    filters: {
      prefix (item) {
        return URL + item
      }
    },
    components: {
      adv,
      InfiniteLoading
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .case-box {
    max-width: 640px;
    margin: 0 auto;
    background: #f7f7f7;
    .case-list {
      .case-item {
        margin-top: 5px;
        padding: 10px 8px 15px 8px;
        border-bottom: 1px solid #eee;
        background: #fff;
        position: relative;
        .case-top {
          font-size: 0;
          .case-headimg {
            display: inline-block;
            width: 38px;
            height: 38px;
            vertical-align: middle;
            > img {
              border-radius: 50%;
            }
          }
          .case-name {
            font-size: 16px;
            display: inline-block;
            line-height: 16px;
            vertical-align: middle;
            margin-left: 5px;
          }
        }
        .case-img {
          display: flex;
          justify-content: center;
          margin-top: 10px;
          .case-before {
            margin-right: 9px;
            flex: 1;
          }
          .case-after {
            flex: 1;
          }
        }
        .case-content {
          font-size: 16px;
          color: #333;
          line-height: 20px;
          margin-top: 5px;
        }
        .case-tag {
          margin-top: 15px;
          font-size: 0;
          > i {
            color: #0eb4bf;
            font-size: 12px;
            display: inline-block;
            vertical-align: top;
            margin-right: 3px;
          }
          .tag-name {
            color: #0eb4bf;
            font-size: 12px;
            display: inline-block;
            vertical-align: top;
            margin-right: 3px;
          }
        }
        .case-btn {
          position: absolute;
          right: 8px;
          bottom: 10px;
          width: 83px;
          height: 22px;
          border-radius: 15px;
          font-size: 14px;
          color: #fff;
          text-align: center;
          line-height: 22px;
          background: -webkit-linear-gradient(top, #04d0bf, #10b4bf);
        }
      }
    }
  }
</style>
