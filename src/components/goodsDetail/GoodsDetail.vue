<template>
  <div id="goods-detail">
    <van-nav-bar :title="$t('goodsDetail.goodsDetail')" @click-left="onClickLeft" :fixed=true left-arrow></van-nav-bar>
    <div class="goods-detail-wrapper">
      <!-- 商品图 -->
      <div class="goods-image">
        <img :src="goodsInfo.small_image" alt="">
      </div>
      <!-- 限时抢购  -->
      <div class="flash" v-show="goodsInfo.isFlash">
        <div class="flash-left">
          <span>{{ $t('home.limitBuy') }}</span>
          <i>{{ $t('goodsDetail.shopping') }}</i>
        </div>
        <div class="flash-right">
          <span>{{ $t('goodsDetail.end') }}</span>
          <!-- 倒计时 -->
          <van-count-down :time="time" class="count-style" format="HH mm ss">
            <template v-slot="timeData">
              <span class="item">{{ timeData.hours }}</span>
              <i>:</i>
              <span class="item">{{ timeData.minutes }}</span>
              <i>:</i>
              <span class="item">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
      </div>
      <!-- 商品名称 -->
      <div class="product-info">
        <div class="title">{{ goodsInfo.name }}</div>
        <div class="sub-title">{{ goodsInfo.spec }}</div>
        <span class="origin-price">{{ goodsInfo.origin_price | moneyFormat }}</span>
        <span class="price">{{ goodsInfo.price }}</span>
        <span class="total-sales">{{ $t('goodsDetail.sold') }}:{{ goodsInfo.total_sales }}</span>
        <van-divider />
        <div class="shipping-info">
          <van-icon name="cluster-o" />{{ $t('goodsDetail.goodsTips') }}
        </div>
        <van-divider />
        <div class="shipping-info">
          <van-icon name="clock-o" />{{ $t('goodsDetail.quickTime') }}
        </div>
      </div>
      <!-- 规格 -->
      <div class="specifications">
        <div class="specifications-title">{{ $t('goodsDetail.specifications') }} </div>
        <van-divider dashed />
        <div class="conditions">
          <span>{{ $t('goodsDetail.preservationConditions') }}</span>
          <span class="conditions-one">{{ $t('goodsDetail.coldStorage') }}</span>
        </div>
        <van-divider dashed />
        <div class="conditions">
          <span>{{ $t('goodsDetail.shelfLife') }}</span>
          <span class="conditions-two">{{ $t('goodsDetail.day') }}</span>
        </div>
        <van-divider dashed />
      </div>
      <div class="show-goods">
        <img :src="goodsInfo.small_image" alt="">
        <img :src="goodsImage" alt="">
      </div>

      <!-- 底部商品导航 -->
      <van-goods-action :safe-area-inset-bottom=true style="z-index:100">
        <van-goods-action-icon icon="cart-o" :info="goodsNum" @click="onClickCar" />
        <van-goods-action-button type="warning" :text="$t('goodsDetail.addToCar')"
          @click="onClickAddToCar" />
      </van-goods-action>
    </div>

    <!-- 回到顶部按钮 -->
    <v-top />
  </div>
</template>

<script type="text/javascript">
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      // 倒计时时间设置
      time: 30 * 60 * 1000 * 100,
      // 是否是限时抢购
      isFlash: false,
      goodsInfo: this.$route.query,
      goodsImage: 'https:\/\/img.ddimg.mobi\/3f280ff77ab3d1571213379189.jpg?width=750&height=1869'
    }
  },
  computed: {
    ...mapState(['shopCart']),
    // 购物车商品数量
    goodsNum () {
      let num = 0
      Object.values(this.shopCart).forEach(goods => num += goods.num)
      if (num > 0) {
        return num
      }
    }
  },
  methods: {
    ...mapMutations(['ADD_TO_CART']),
    // 返回
    onClickLeft () {
      this.$router.go(-1)
    },
    // 加入购物车
    onClickAddToCar () {
      this.ADD_TO_CART(this.goodsInfo)
    },
    // 点击了购物车
    onClickCar () {
      this.$router.push({ name: 'cart' })
    }
  }
}
</script>
<style lang="less" scoped>
#goods-detail {
  background-color: #f5f5f5;
  .goods-detail-wrapper {
    overflow: hidden;
    margin-top: 2.7rem;
    .goods-image {
      width: 100%;
      img {
        width: 100%;
        height: 80%;
      }
    }
    .flash {
      display: flex;
      flex: 1;
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      .flash-left {
        width: 55%;
        background-color: #e25450;
        span {
          font-size: 0.8rem;
          color: #ffffff;
          padding-left: 1rem;
        }
        i {
          padding-left: 0.6rem;
          font-size: 0.5rem;
          color: #ffffff;
        }
      }
      .flash-right {
        width: 45%;
        background-color: #fcefe9;
        height: 2rem;
        line-height: 2rem;
        padding-left: 0.5rem;
        font-size: 0.5rem;
        color: #e25450;
        .count-style {
          display: inline;
          margin-left: 0.3rem;
          .item {
            display: inline-block;
            width: 22px;
            margin-right: 5px;
            color: #fff;
            font-size: 12px;
            text-align: center;
            background-color: #e25450;
          }
          i {
            color: #e25450;
            padding-right: 0.2rem;
          }
        }
      }
    }
    .product-info {
      background-color: white;
      padding: 0.5rem;
      .title {
        color: black;
        font-size: 0.8rem;
      }
      .sub-title {
        padding: 0.5rem 0;
        color: grey;
        font-size: 0.6rem;
      }
      .origin-price {
        color: #e25450;
        padding-right: 0.5rem;
        font-size: 0.8rem;
      }
      .price {
        color: grey;
        font-size: 0.5rem;
        text-decoration: line-through;
      }
      .total-sales {
        float: right;
        color: #e25450;
        font-size: 0.8rem;
      }
      .shipping-info {
        font-size: 0.6rem;
        height: 0.8rem;
        color: grey;
      }
    }
    .specifications {
      width: 100%;
      background-color: white;
      margin-top: 1rem;
      padding-left: 0.5rem;
      .specifications-title {
        padding-top: 1rem;
        font-size: 1rem;
        color: black;
      }
      .conditions {
        font-size: 0.6rem;
        height: 1rem;
        color: grey;
        .conditions-one {
          padding-left: 2rem;
        }
        .conditions-two {
          padding-left: 2.5rem;
        }
      }
    }
    .show-goods {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
