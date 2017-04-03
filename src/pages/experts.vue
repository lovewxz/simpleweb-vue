<template>
  <div class="doc-box">
    <adv :is-expert="true"></adv>
    <div class="doc-list" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <div class="doc-item-wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
           infinite-scroll-distance="10">
        <div class="doc-item" v-for="item in expertList">
          <div class="doc-pic">
            <img :src="item.litpic | prefix" alt="" width="103" height="86">
          </div>
          <div class="doc-content">
            <div class="doc-name">{{item.title}}<span>{{item.expert_title}}</span></div>
            <div class="doc-adv">擅长项目</div>
            <p class="doc-pro">{{item.expert_advantage}}</p>
            <a href="/a/zhuanjiatuandui/2017/0322/208.html">
              <div class="doc-btn">
                了解详情
              </div>
            </a>
          </div>
        </div>
      </div>
      <p v-show="loading">加载中...</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0
  const URL = 'http://m.0755mingyi.com'

  import adv from '@/components/adv'
  import Vue from 'vue'
  import {InfiniteScroll} from 'mint-ui'
  Vue.use(InfiniteScroll)

  export default {
    data () {
      return {
        expertList: [],
        wrapperHeight: 0,
        loading: false,
        page: 1,
        num: 3,
        total: 0
      }
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          if (this.page > Math.ceil(this.total / this.num)) {
            return
          }
          this.page++
          this.$http.get('http://m.0755mingyi.com/api/res.php?action=expertslist&page=' + this.page + '&num=' + this.num).then((response) => {
            response = response.body
            if (response.status === ERR_OK) {
              this.expertList = this.expertList.concat(response.data.list)
              this.loading = false
            }
          })
        }, 5000)
      }
    },
    mounted () {
      this.$http.get('http://m.0755mingyi.com/api/res.php?action=expertslist&num=' + this.num).then((response) => {
        response = response.body
        if (response.status === ERR_OK) {
          this.expertList = response.data.list
          this.total = response.data.total
          this.$nextTick(() => {
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
          })
        }
      })
    },
    filters: {
      prefix (item) {
        return URL + item
      }
    },
    components: {
      adv
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .doc-box {
    max-width: 640px;
    margin: 0 auto;
    overflow: hidden;
    .doc-list {
      background: #fff;
      margin-top: 8px;
      overflow: scroll;
      .doc-item {
        display: flex;
        padding: 10px 5px 16px 8px;
        border-bottom: 1px solid #eee;
        &:last-child {
          border-bottom: none;
        }
        .doc-pic {
          flex: 0 0 103px;
          width: 103px;
        }
        .doc-content {
          flex: 1;
          margin-left: 13px;
          .doc-name {
            font-size: 16px;
            color: #000;
            > span {
              font-size: 12px;
              color: #999;
              margin-left: 5px;
            }
          }
          .doc-adv {
            font-size: 14px;
            margin: 3px 0;
          }
          .doc-pro {
            font-size: 12px;
            color: #999;
            line-height: 14px;
          }
          .doc-btn {
            margin-top: 5px;
            width: 87px;
            heihgt: 22px;
            border-radius: 10px;
            font-size: 12px;
            color: #fff;
            line-height: 22px;
            text-align: center;
            background: -webkit-linear-gradient(top, #04d0bf, #10b4bf);
          }
        }
      }
    }
  }
</style>
