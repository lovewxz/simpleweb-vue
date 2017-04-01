<template>
  <div class="header">
    <div class="menu ion-navicon-round" @click="showMenu"></div>
    <div class="logo"></div>
    <div class="search ion-ios-search-strong" @click="showSearch"></div>
    <tab-menu :tab-item="tabList" :menu-contain="containnerList" @hideMenu="hideMenu" :menu-show="menuShow"></tab-menu>
    <transition name="fade">
      <div class="search-detail" v-show="searchShow">
        <div class="search-top">
          <div class="search-input-wrapper">
            <form action="http://m.0755mingyi.com/plus/search.php">
              <i class="ion-ios-search-strong icon-search"></i>
              <input name="q" type="text" class="search-input search-keyword" placeholder="输入你想了解的内容"
                     id="search-keyword">
            </form>
            <span class="search-cancel" @click="hideSearch">取消</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import tabMenu from '../components/tabMenu'
  const ERR_OK = 0

  export default {
    name: 'header',
    data () {
      return {
        menuShow: false,
        searchShow: false,
        tabList: [],
        containnerList: []
      }
    },
    watch: {
      '$route' (to, from) {
        if (this.menuShow) {
          // 只有菜单显示的时候,路由发生变化才会把菜单强制设置为false
          this.menuShow = false
        }
      }
    },
    methods: {
      showMenu () {
        this.menuShow = true
      },
      hideMenu () {
        this.menuShow = false
      },
      showSearch () {
        this.searchShow = true
      },
      hideSearch () {
        this.searchShow = false
      }
    },
    created () {
      this.$http.get('http://m.0755mingyi.com/api/res.php?action=list').then((response) => {
        response = response.body
        if (response.status === ERR_OK) {
          this.tabList = response.data
        }
      })
      this.$http.get('http://m.0755mingyi.com/api/res.php?action=relist').then((response) => {
        response = response.body
        if (response.status === ERR_OK) {
          this.containnerList = response.data
        }
      })
    },
    components: {
      tabMenu
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    width: 100%;
    background: #262432;
    height: 41px;
    text-align: center;
    position: relative;
    .menu {
      position: absolute;
      top: 0;
      left: 13px;
      color: #fff;
      font-size: 30px;
      line-height: 41px;
    }
    .search {
      position: absolute;
      top: 0;
      right: 13px;
      color: #fff;
      font-size: 30px;
      line-height: 41px;
    }
    .logo {
      width: 233px;
      height: 18px;
      display: inline-block;
      margin-top: 10px;
    }
    .search-detail {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      z-index: 30;
      &.fade-enter, &.fade-leave-active {
        opacity: 0;
      }
      &.fade-enter-active, &.fade-leave-active {
        transition: all .5s;
      }
      .search-top {
        padding: 7px 0 7px 8px;
        height: 45px;
        border-bottom: 1px solid #eee;
        background: #fff;
        box-sizing: border-box;
        .search-input-wrapper {
          font-size: 0;
          form {
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: 80%;
            .icon-search {
              font-size: 24px;
              color: #999;
              top: 0px;
              left: 5%;
              height: 10px;
              width: 30px;
              line-height: 32px;
              position: absolute;
            }
            .search-input {
              padding: 5px 10px 5px 45px;
              height: 20px;
              background: #f0f0f0;
              border: 0px;
              border-radius: 5px;
              font-size: 16px;
              color: #000;
              width: 80%;
            }
          }
          .search-cancel {
            font-size: 16px;
            color: #03d2bf;
            display: inline-block;
            margin-left: 17px;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
