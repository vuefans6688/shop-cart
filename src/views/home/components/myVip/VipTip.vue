<template>
  <div id="vip-page" @click="goToMyVip">
    <svg-icon iconClass="vip" class="icon" />
    <span class="title">{{ $t('home.vipDesc') }}</span>
    <span class="sub-title">{{ $t('home.vipSubDesc') }}</span>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    goToMyVip () {
      if (this.userInfo.token) {
        this.$router.push({ name: 'myVip' })
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
#vip-page {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem auto;
  height: 2rem;
  background-color: #3bba63;
  width: 95%;
  border-radius: 0.2rem;
  opacity: 0.9;
  .icon {
    padding-left: 0.5rem;
  }
  .title {
    margin-left: 0.5rem;
    font-size: 0.6rem;
    color: white;
  }
  .sub-title {
    margin-left: auto;
    margin-right: 0.5rem;
    font-size: 0.6rem;
    color: white;
  }
}
</style>

