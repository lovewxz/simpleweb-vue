<template>
  <div class="pro-box">
    <adv :is-expert="false"></adv>
    <section class="xm-list">
      <div class="xm-pic">
        <img :src="proCon.litpic | prefix" alt="" width="130" height="107">
      </div>
      <div class="xm-content">
        <div class="xm-title">{{proCon.title}}</div>
        <p class="xm-desc">{{proCon.project_introduce}}</p>
        <div class="xm-tags">
          <span v-for="(item,index) in proCon.tags"><i class="ion-pricetag"></i>{{item}}</span>
        </div>
      </div>
    </section>
    <section class="xm-listcontent">
      <div class="xm-people"><i class="ion-ios-person-outline"></i><span>适用人群</span></div>
      <p class="people-content" v-html="proCon.project_people"></p>
      <div class="xm-people xm-advantage"><i class="ion-paper-airplane"></i><span>技术优势</span></div>
      <p class="people-content" v-html="proCon.project_adv"></p>
      <div class="xm-people xm-compare" v-if="proCon.project_before | proCon.project_after"><i class="ion-social-buffer-outline"></i><span>案例对比图</span></div>
      <div class="xm-compare-pic" v-if="proCon.project_before | proCon.project_after">
        <div class="pic-before">
          <img :src="proCon.project_before | prefix" alt="">
        </div>
        <div class="pic-after">
          <img :src="proCon.project_after | prefix" alt="">
        </div>
      </div>
      <div class="xm-people xm-compare"><i class="ion-ios-medkit-outline"></i><span>推荐医师：{{proCon.project_doc}}</span>
      </div>
      <div class="docotor-detail">
        <img :src="proCon.expert_list | prefix" alt="">
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import adv from '@/components/adv'

  const ERR_OK = 0
  const URL = 'http://m.0755mingyi.com'
  export default {
    data () {
      return {
        proCon: {}
      }
    },
    watch: {
      '$route' (to, from) {
        this.$http.get('http://m.0755mingyi.com/api/res.php?action=project&id=' + this.$route.params.id).then((response) => {
          response = response.body
          if (response.status === ERR_OK) {
            this.proCon = response.data
          }
        })
      }
    },
    filters: {
      prefix (item) {
        return URL + item
      }
    },
    created () {
      this.$http.get('http://m.0755mingyi.com/api/res.php?action=project&id=' + this.$route.params.id).then((response) => {
        response = response.body
        if (response.status === ERR_OK) {
          this.proCon = response.data
        } else {
          this.$router.push('/')
        }
      })
    },
    components: {
      adv
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .pro-box {
    max-width: 640px;
    margin: 0 auto;
    overflow: hidden;
    .xm-list {
      padding: 6px 8px;
      background: #fff;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      box-shadow: 0 1px 0 #eee;
      .xm-pic {
        flex: 0 0 130px;
        width: 130px;
      }
      .xm-content {
        margin-left: 12px;
        .xm-title {
          font-size: 14px;
          color: #000;
          font-weight: 700;
          margin-top: 5px;
        }
        .xm-desc {
          font-size: 12px;
          line-height: 16px;
          color: #999;
          margin: 8px 0;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          box-orient: vertical;
          line-clamp: 4;
        }
        .xm-tags {
          > span {
            display: inline-block;
            width: 53px;
            height: 16px;
            color: #08c5bf;
            border-radius: 5px;
            border: 1px solid #08c5bf;
            font-size: 9px;
            line-height: 16px;
            text-align: center;
            margin-right: 3px;
            > i {
              font-size: 9px;
              margin-right: 2px;
              line-height: 16px;
            }
          }
        }
      }
    }
    .xm-listcontent {
      background: #fff;
      padding: 0 8px;
      margin-top: 8px;
      .xm-people {
        font-size: 0;
        padding-top: 10px;
        color: #000;
        border-bottom: 1px solid #eee;
        > span {
          margin-left: 3px;
          font-size: 16px;
          line-height: 1.2;
          display: inline-block;
          vertical-align: middle;
        }
        i {
          font-size: 28px;
          line-height: 1.2;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .people-content {
        font-size: 12px;
        color: #333;
        margin-top: 10px;
        line-height: 16px;
      }
      .xm-advantage i {
        font-size: 20px;
      }
      .xm-compare-pic {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .pic-before {
          margin-right: 8px;
          flex: 1;
        }
        .pic-after {
          flex: 1;
        }
      }
      .docotor-detail {
        margin-top: 10px;
      }
    }
  }
</style>
