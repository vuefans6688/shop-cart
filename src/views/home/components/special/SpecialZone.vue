<template>
  <div id="special-zone">
    <div class="title-wrapper">
      <div class="title">{{ $t('home.specialZone') }}</div>
    </div>
    <!-- 新品尝鲜 -->
    <div class="wrapper-item">
      <div class="new-item"
        v-for="newItem in specialZone.newItemList"
        :key="newItem.id">
        <span class="item-title">{{ newItem.title }}</span>
        <p class="item-sub-title">{{ newItem.subtitle }}</p>
        <img class="item-img"
          v-lazy="newItem.imageOne"
          alt="">
        <img class="item-img"
          v-lazy="newItem.imageTwo"
          alt="">
      </div>

      <!-- 九月热卖 -->
      <div class="hot-item"
        v-for="hotItem in specialZone.hotItemList"
        :key="hotItem.id">
        <span class="item-title hot-item-title">{{ hotItem.title }}</span>
        <p class="item-sub-title">{{ hotItem.subtitle }}</p>
        <img class="item-img"
          v-lazy="hotItem.imageOne"
          alt="">
        <img class="item-img"
          v-lazy="hotItem.imageTwo"
          alt="">
      </div>

      <!-- VIP专享 -->
      <div class="vip-item"
        v-for="vipItem in specialZone.vipItemList"
        :key="vipItem.id">
        <span class="item-title vip-item-title">{{ vipItem.title }}</span>
        <p class="item-sub-title">{{ vipItem.subtitle }}</p>
        <img class="item-img"
          v-lazy="vipItem.imageOne"
          alt="">
        <img class="item-img"
          v-lazy="vipItem.imageTwo"
          alt="">
      </div>

      <!-- 其他列表 -->
      <div class="other-item"
        v-for="otherItem in specialZone.otherItemList"
        :key="otherItem.id">
        <p class="other-title">{{otherItem.title}}</p>
        <p class="other-sub-title">{{otherItem.subtitle}}</p>
        <img class="other-image"
          src="../../../../images/special/peanut.jpeg"
          alt="">
      </div>

      <!-- 平价菜场 -->
      <div class="low-price"
        v-for="lowPriceItem in specialZone.lowPriceItemList"
        :key="lowPriceItem.id">
        <p class="other-title">{{ lowPriceItem.title }}</p>
        <p class="other-sub-title">{{ lowPriceItem.subtitle }}</p>
        <img class="other-image"
          :src="lowPriceItem.image"
          alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    specialZone: Object
  }
}
</script>

<style lang="less" scoped>
#special-zone {
  margin-top: 0.625rem;
  padding: 1.25rem 0 0.9375rem 0;
  background-color: white;
}
.title-wrapper {
  margin: 0 0.625rem 0.625rem 0.625rem;
  height: 1.5625rem;
}
.title {
  display: inline-block;
  border-left: 4px #3cb963 solid;
  padding-left: 0.3125rem;
  height: 1.3125rem;
  line-height: 1.3125rem;
  vertical-align: middle;
  font-size: 1.1875rem;
}
.wrapper-item {
  width: 95%;
  height: 10rem;
  border: 0.01rem solid #dddbc0;
  margin-left: 2.5%;
}
.wrapper-item .new-item {
  float: left;
  width: 49.9%;
  height: 5rem;
  border-right: 0.01rem solid #dddbc0;
  border-bottom: 0.01rem solid #dddbc0;
}
.item-title {
  width: 100%;
  font-size: 0.625rem;
  background-image: linear-gradient(135deg, red, orange);
  -webkit-background-clip: text;
  color: transparent;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
}

.item-sub-title {
  font-size: 0.45rem;
  color: grey;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
}
.hot-item {
  float: left;
  width: 49.9%;
  height: 5rem;
  border-bottom: 0.01rem solid #dddbc0;
}
.hot-item-title {
  background-image: linear-gradient(150deg, #b2233f, #f70d3c);
  -webkit-background-clip: text;
  color: transparent;
}
.vip-item {
  float: left;
  width: 49.9%;
  height: 5rem;
  border-right: 0.01rem solid #dddbc0;
}
.vip-item-title {
  background-image: linear-gradient(150deg, #0e9e09, #51b14d);
  -webkit-background-clip: text;
  color: transparent;
}
.item-img {
  padding: 0.3rem 0.5rem 0rem 0.7rem;
  width: 3rem;
  height: 2.5rem;
}
.other-item {
  float: left;
  width: 25%;
  border-right: 0.01rem solid #dddbc0;
  height: 5rem;
}

.other-title {
  font-size: 0.625rem;
  color: black;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
}

.other-sub-title {
  font-size: 0.45rem;
  color: grey;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
}

.other-image {
  width: 2.5rem;
  height: 2.5rem;
  padding-left: 1rem;
  border-radius: 50%;
}
.low-price {
  float: left;
  width: 24.5%;
  height: 5rem;
}
</style>
