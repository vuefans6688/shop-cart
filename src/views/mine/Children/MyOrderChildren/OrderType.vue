<template>
  <div id="order-type">
    <div v-if="orderTypeDataArray.length > 0">
    </div>
    <div v-else class="no-data-placehold">
      <img src="./../../../../images/mine/noData.jpeg" alt="">
      <span class="desc">{{ $t('mine.feedbackTip') }}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    orderTypeDataArray: Array
  }
}
</script>

<style lang="less" scoped>
#order-type {
  margin-top: 5rem;
  height: 20rem;
  .no-data-placehold {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
      height: 60%;
    }
    .desc {
      color: grey;
      font-size: 0.6rem;
    }
  }
  .no-data-placehold {
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
</style>
