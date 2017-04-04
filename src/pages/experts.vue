<template>
  <div class="doc-box">
    <adv :is-expert="true"></adv>
    <div class="doc-list" ref="wrapper">
      <div class="doc-item-wrapper">
        <div class="doc-item" v-for="item in expertList">
          <div class="doc-pic">
            <img :src="item.litpic | prefix" alt="" width="103" height="86">
          </div>
          <div class="doc-content">
            <div class="doc-name">{{item.title}}<span>{{item.expert_title}}</span></div>
            <div class="doc-adv">擅长项目</div>
            <p class="doc-pro">{{item.expert_advantage}}</p>
            <router-link :to="{name:'article',params:{id:item.id}}" :key="item.id">
              <div class="doc-btn">
                了解详情
              </div>
            </router-link>
          </div>
        </div>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="spiral" :distance="distance">
          <span slot="no-more">
            没有更多专家了
          </span>
        </infinite-loading>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0
  const URL = 'http://m.0755mingyi.com'
  const api = URL + '/api/res.php?action=expertslist'

  import adv from '@/components/adv'
  import InfiniteLoading from 'vue-infinite-loading'

  export default {
    data () {
      return {
        expertList: [],
        num: 5,
        distance: 10
      }
    },
    methods: {
      onInfinite () {
        this.$http.get(api, {
          params: {
            page: this.expertList.length / this.num + 1,
            num: this.num
          }
        }).then((res) => {
          res = res.body
          if (res.data.list && res.data.list.length && res.status === ERR_OK) {
            this.expertList = this.expertList.concat(res.data.list)
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
      InfiniteLoading,
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
      overflow: hidden;
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
