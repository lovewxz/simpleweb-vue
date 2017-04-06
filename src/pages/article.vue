<template>
  <div class="article-wrapper">
    <adv :is-expert="false"></adv>
    <div class="article-body">
      <h1 class="article-title">{{article.title}}</h1>
      <div class="article-info">
        <span class="article-source">来源:{{article.writer}}</span>
        <span class="article-time">日期:{{article.pubdate | formateDate}}</span>
      </div>
      <div class="article-content" v-html="content()"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import adv from '@/components/adv'
  import {formateDate} from '@/assets/js/date'

  const URL = 'http://m.0755mingyi.com'
  let api = URL + '/api/res.php?action=expertarc'
  const ERR_OK = 0

  export default {
    data () {
      return {
        article: []
      }
    },
    created () {
      if (this.$route.fullPath.indexOf('case') > 0) {
        api = URL + '/api/res.php?action=casearc'
      }
      this.$http.get(api, {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        res = res.body
        if (res.status === ERR_OK) {
          this.article = res.data
        } else {
          this.$router.push('/')
        }
      })
    },
    filters: {
      formateDate (time) {
        time.length > 10 ? time * 1000 : time
        let date = new Date(time * 1000)
        return formateDate(date, 'yyyy-MM-dd')
      }
    },
    methods: {
      content () {
        if (this.$route.fullPath.indexOf('case') > 0) {
          return this.article.casecontent
        } else {
          return this.article.expert_content
        }
      }
    },
    components: {
      adv
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .article-wrapper {
    max-width: 640px;
    margin: 0 auto;
    overflow: hidden;
    background: #f7f7f7;
    .article-body {
      margin-top: 5px;
      padding: 10px 8px;
      background: #fff;
      .article-title {
        font-size: 16px;
        color: #f95680;
        line-height: 18px;
      }
      .article-info {
        padding: 6px 0;
        border-bottom: 1px solid #eee;
        font-size: 0;
        > span {
          font-size: 12px;
          color: #999;
          margin-right: 4px;
        }
      }
      .article-content {
        margin-top: 10px;
        img {
          margin: 5px auto;
          height: auto !important;
        }
      }
    }
  }
</style>
