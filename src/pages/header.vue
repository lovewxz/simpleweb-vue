<template>
  <div class="header">
    <div class="menu ion-navicon-round" @click="showMenu"></div>
    <div class="logo"></div>
    <div class="search ion-ios-search-strong"></div>
    <transition name="move">
      <div class="menu-detail" v-show="menuShow">
        <div class="menu-title">
          <div class="reset-btn ion-arrow-return-left" @click="hideMenu"></div>
          <div class="menu-logo"></div>
        </div>
        <div class="menu-project">
          <div class="menu-nav" ref="menuNav">
            <ul>
              <li v-for="(item,index) in tabList" :class="{on: on === index}" @click="tabMenu(index,$event)">
                <p>{{item.typename}}</p>
              </li>
            </ul>
          </div>
          <div class="menu-content-wrapper" ref="menuContent">
            <div class="menu-box">
              <div class="menu-content" v-for="(menu,index) in containnerList" v-show="index === on">
                <div class="menu-item-wrapper">
                  <div class="menu-item" v-for="menuItem in menu">
                    <h2 class="item-title">{{menuItem.typename}}</h2>
                    <div class="item-pro">
                      <a v-for="itemPro in menuItem.article" href="">{{itemPro.title}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  const ERR_OK = 0
  export default {
    name: 'header',
    data () {
      return {
        menuShow: false,
        tabList: [],
        containnerList: [],
        on: 0
      }
    },
    methods: {
      showMenu () {
        this.menuShow = true
        this.$nextTick(() => {
          this._initContentScroll()
          this._initNavScroll()
        })
      },
      hideMenu () {
        this.menuShow = false
      },
      tabMenu (index, event) {
        if (!event._constructed) {
          return
        }
        this.$nextTick(() => {
          this._initContentScroll()
        })
        this.on = index
      },
      _initNavScroll () {
        if (!this.menuNav) {
          this.menuNav = new BScroll(this.$refs.menuNav, {
            click: true
          })
        } else {
          this.menuNav.refresh()
        }
      },
      _initContentScroll () {
        if (!this.menuContent) {
          this.menuContent = new BScroll(this.$refs.menuContent, {
            click: true
          })
        } else {
          this.menuContent.refresh()
        }
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
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../assets/scss/mixin.scss';

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
    .menu-detail {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #262432;
      &.move-enter-active, &.move-leave-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: all .5s;
      }
      &.move-enter, &.move-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
      .menu-title {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 41px;
        text-align: center;
        .reset-btn {
          position: absolute;
          left: 12px;
          top: 0;
          font-size: 32px;
          color: #555266;
          line-height: 41px;
        }
        .menu-logo {
          width: 233px;
          height: 18px;
          display: inline-block;
          margin-top: 12px;
        }
      }
      .menu-project {
        position: absolute;
        top: 41px;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        .menu-nav {
          flex: 0 0 107px;
          width: 107px;
          height: 100%;
          background: #262432;
          overflow: hidden;
          position: relative;
          ul {
            padding-bottom: 40px;
            li {
              width: 100%;
              height: 58px;
              @include border-1px(#42414b);
              color: #fff;
              display: table;
              &.on {
                top: -1px;
                background: #555266;
                color: #999;
              }
              &:last-child {
                @include border-none
              }
              p {
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                font-size: 16px;
                font-weight: 700;
              }
            }
          }
        }
        .menu-content-wrapper {
          padding: 0 10px 0 15px;
          background: #555266;
          flex: 1;
          height: 100%;
          overflow: hidden;
          position: relative;
          .menu-content {
            .menu-item-wrapper {
              padding-bottom: 80px;
              .menu-item {
                padding-bottom: 10px;
                border-bottom: 1px dashed #a7a7a7;
                .item-title {
                  font-size: 16px;
                  color: #fff;
                  margin: 13px 0 10px 0;
                  text-align: left;
                }
                .item-pro {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: flex-start;
                  align-items: center;
                  a {
                    flex: 0 0 47%;
                    width: 47%;
                    height: 30px;
                    display: inline-block;
                    margin-right: 5px;
                    font-size: 14px;
                    color: #a7a7a7;
                    text-align: center;
                    line-height: 30px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
