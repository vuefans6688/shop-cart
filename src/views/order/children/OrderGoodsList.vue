<template>
  <div id="order-goods-list">
    <van-nav-bar :title="$t('order.goodsList')"
      left-arrow
      :fixed=true
      @click-left="onClickLeft" />
    <div class="list-title">
      <span>{{ $t('order.goods') }}</span>
      <span class="total">{{ selectedCount }}</span>
    </div>
    <ul>
      <li class="goods-list"
        v-for="(item,index) in goods" :key=index>
        <div class="list-item">
          <img :src="item.smallImage" alt="">
        </div>
        <div class="text-detail">
          <p class="name">{{ item.name }}</p>
          <span class="sub-param">{{ $t('order.sigalPrice') }}{{ item.price | moneyFormat }}</span>
          <span class="sub-param">{{ $t('order.numbers') }}{{ item.num }}</span>
        </div>
        <div class="good-price">{{ item.price*item.num | moneyFormat }}</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex'
export default {
  computed: {
    // 从store中取选中的商品信息
    ...mapGetters({
      selectedCount: 'SELECTED_GOODS_COUNT',
      goods: 'SELECTED_GOODS'
    }),
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
#order-goods-list {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 200;
  overflow-y: auto;
  overflow-x: hidden;
  .list-title {
    padding-left: 0.5rem;
    margin-top: 3rem;
    height: 1.5rem;
    line-height: 1.5rem;
    width: 100%;
    background-color: white;
    border-bottom: solid 0.01rem #e8e9e8;
    font-size: 0.9rem;
    .total {
      padding-right: 2rem;
      font-size: 0.9rem;
      float: right;
    }
  }
  .goods-list {
    display: flex;
    height: 3rem;
    width: 100%;
    background-color: white;
    border-bottom: solid 0.01rem #e8e9e8;
    .list-item {
      height: 3rem;
      width: 10%;
      img {
        padding: 0.5rem;
        width: 100%;
        height: 2.5rem;
      }
    }
    .text-detail {
      height: 3rem;
      width: 70%;
      padding-left: 0.9rem;
      .name {
        font-size: 0.8rem;
        padding: 0.3rem 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .sub-param {
        font-size: 0.6rem;
        color: grey;
        padding-right: 0.5rem;
      }
    }
    .good-price {
      padding-top: 0.3rem;
      font-size: 0.8rem;
    }
  }
}
</style>
