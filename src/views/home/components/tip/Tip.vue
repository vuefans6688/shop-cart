<template>
  <div id="tip">
    <div class="tip-box">
      <img src="../../../../images/icon/transport.png" alt="">
      <span class="tip-text">{{ $t('goodsDetail.quickTime') }}</span>
    </div>
    <div class="tip-box">
      <img src="../../../../images/icon/money.png" alt="">
      <span class="tip-text">{{ $t('common.distributionTip') }}</span>
    </div>

    <div class="tip-box">
      <img src="../../../../images/icon/seal.png" alt="">
      <span class="tip-text">{{ $t('common.easeBack') }}</span>
    </div>
    <div @click="goToVip">
      <img class="add-img" :src="home_ad">
    </div>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  props: {
    // 父组件传递过来的数据
    home_ad: [String]
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    goToVip () {
      this.$router.push({ name: 'myVip' })
    }
  }
}
</script>

<style lang="less" scoped>
#tip {
  margin-top: 0.3rem;
  position: relative;
}

.tip-box {
  float: left;
  width: 33%;
  text-align: center;
}

.tip-box img {
  vertical-align: middle;
  height: 1rem;
  width: 1rem;
  margin-right: 0.2rem;
}

.tip-text {
  font-size: 0.6rem;
  color: #45c763;
}
.add-img {
  margin-top: 0.8rem;
  width: 100%;
  height: 6rem;
  margin-bottom: -0.2rem;
}
.add-title {
  position: absolute;
  top: 3.4rem;
  left: 14%;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 1.2rem;
  border-radius: 50%;
  font-size: 0.1rem;
  text-align: center;
  color: gold;
  background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);
  -webkit-animation-name: scale-draw; /*关键帧名称*/
  -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
  -webkit-animation-iteration-count: infinite; /*动画播放的次数*/
  -webkit-animation-duration: 3s; /*动画所花费的时间*/

  @keyframes scale-draw {
    /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
    0% {
      transform: scale(1); /*开始为原始大小*/
    }
    25% {
      transform: scale(1.1); /*放大1.1倍*/
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.1);
    }
  }
}
</style>
