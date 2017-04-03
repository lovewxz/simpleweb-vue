<template>
  <div class="map-box">
    <div class="map-name">
      <div class="map-title">
        <i class="ion-ios-medkit-outline"></i>
        <span>深圳铭医医疗美容医院</span>
      </div>
      <div class="map-desc">
        <p class="map-tel"><span class="ion-ios-telephone"></span><em>美丽热线：0755-82328320</em></p>
        <p class="map-add"><span class="ion-ios-location"></span><em>来院地址：深圳市罗湖区深南东路3018号祥祺商厦1-5层（地铁c出口）</em></p>
      </div>
    </div>

    <div class="map-train">
      <div class="map-title">
        <i class="ion-android-train"></i>
        <span>地铁线路</span>
      </div>
      <div class="map-train-desc">
        <div class="pic-left">
          <img :src="require('../assets/images/map_22.jpg')" alt="">
        </div>
        <div class="content-right">
          <p>地铁<span class="col1">1号线</span>老街C出口--祥祺商厦（银都大厦或香梅酒店旁边）</p>
          <p>地铁<span class="col2">3号线</span>老街C出口--祥祺商厦（银都大厦或香梅酒店旁边）</p>
          <a href="javascript:void(0);" onclick="openZoosUrl('chatwin');" target="_blank">
            <div class="map-btn">在线咨询</div>
          </a>
        </div>
      </div>
    </div>
    <div class="map-train">
      <div class="map-title">
        <i class="ion-android-bus"></i>
        <span>公交路线</span>
      </div>
      <div class="map-train-desc">
        <div class="pic-left">
          <img :src="require('../assets/images/map_25.jpg')" alt="">
        </div>
        <div class="content-right">
          <dt>宝安：311→门诊部</dt>
          <dt>平湖：平湖广场300路B线→东门站</dt>
          <dt>福田：103→东门站</dt>
          <dt>横岗：309、351→东门站</dt>
          <dt>观澜、龙华：300→东门站</dt>
          <dt>龙岗：309、351→东门站</dt>
          <dt>南山：369→东门站</dt>
          <dt>蛇口：113→东门站、k113→门诊部站</dt>
          <dt>东门老街站（公交单方向路线）：3、59、64、103、113、203、M481、N3、N6、观光2线</dt>
          <p class="car-desc">注：如不清楚，可拨打0755-82328320</p>
          <a href="javascript:void(0);" onclick="openZoosUrl('chatwin');" target="_blank">
            <div class="map-btn">在线咨询</div>
          </a>
        </div>
      </div>
    </div>
    <div class="map-train">
      <div class="map-title">
        <i class="ion-android-car"></i>
        <span>自驾路线</span>
      </div>
      <div class="map-train-desc">
        <div class="pic-left">
          <img :src="require('../assets/images/map_27.jpg')" alt="">
        </div>
        <div class="content-right">
          <p>导航关键词：<br>深圳铭医医疗美容医院、祥祺商厦</p>
          <p>本院提供免费停车，<br>如若不清楚可拨打电话：<br>0755-82328320<br>离开医院时到前台领取<span class="col3">免费停车卡</span></p>
          <a href="javascript:void(0);" onclick="openZoosUrl('chatwin');" target="_blank">
            <div class="map-btn">在线咨询</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="scss" rel="stylesheet/scss">
  .map-box {
    max-width: 640px;
    margin: 0 auto;
    background: #f7f7f7;
    .col1 {
      color: #1cb282;
    }
    .col2 {
      color: #5d84cf;
    }
    .col3 {
      color: #10b4bf;
    }
    .map-btn {
      width: 117px;
      height: 30px;
      border-radius: 10px;
      font-size: 16px;
      color: #fff;
      text-align: center;
      line-height: 30px;
      background: -webkit-linear-gradient(top,#04d0bf,#10b4bf);
    }
    .map-name {
      padding: 4px 8px 18px 8px;
      background: #fff;
      margin-top: 5px;
      box-shadow: 0 1px 0 #eee;
      .map-title {
        font-size: 0;
        border-bottom: 1px solid #eee;
        padding-bottom: 5px;
        > i {
          width: 24px;
          height: 24px;
          background: #0ac3bf;
          border-radius: 50%;
          font-size: 20px;
          color: #fff;
          line-height: 24px;
          display: inline-block;
          text-align: center;
        }
        > span {
          font-size: 20px;
          margin-left: 4px;
          color: #333;
          font-weight: bold;
        }
      }
      .map-desc {
        margin-top: 11px;
        .map-tel, .map-add {
          font-size: 0;
          display: flex;
          > span {
            flex: 0 0 20px;
            font-size: 20px;
            color: #0ac3bf;
            display: inline-block;
            width: 20px;
            height: 20px;
            text-align: center;
            vertical-align: middle;
            line-height: 20px;
          }
          > em {
            flex: 1;
            line-height: 20px;
            font-size: 12px;
            display: inline-block;
            vertical-align: middle;
            margin-left: 5px;
            color: #333;
            font-style: normal;
          }
        }
      }
    }
    .map-train {
      padding: 4px 8px 18px 8px;
      background: #fff;
      margin-top: 5px;
      box-shadow: 0 1px 0 #eee;
      .map-title {
        font-size: 0;
        border-bottom: 1px solid #eee;
        padding-bottom: 5px;
        > i {
          width: 24px;
          height: 24px;
          background: #0ac3bf;
          border-radius: 50%;
          font-size: 20px;
          color: #fff;
          line-height: 24px;
          display: inline-block;
          text-align: center;
        }
        > span {
          font-size: 20px;
          margin-left: 4px;
          color: #333;
          font-weight: bold;
        }
      }
      .map-train-desc {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 11px;
        .pic-left {
          flex: 1;
        }
        .content-right {
          margin-left: 8px;
          flex: 0 0 50%;
          width: 50%;
          > p {
            margin-bottom: 10px;
            font-size: 12px;
            line-height: 16px;
          }
          > dt {
            font-size: 12px;
            line-height: 14px;
            color: #333;
          }
          .car-desc {
            font-size: 12px;
            color: #999;
            margin: 5px 0;
          }
        }
      }
    }
  }
</style>
