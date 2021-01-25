<template>
  <div class="search-wrapper">
    <div class="search-box" @click="goSearch">
      <div class="icon-search-wrapper">
        <svg-icon iconClass="search"></svg-icon>
      </div>
      <span class="search-prompt">{{ $t('category.tip') }}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
import { Toast } from 'vant'
export default {
  methods: {
    // 到搜索界面
    goSearch () {
      Toast({
        message: this.$t('common.unrealized'),
        duration: 800
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search-wrapper {
  padding: 0.5rem 0.625rem;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: solid 1px #e6e6e6;
  z-index: 999;
}
.search-box {
  display: block;
  padding: 0 0.875rem 0 1.75rem;
  border-radius: 1.75rem;
  height: 1.75rem;
  line-height: 1.75rem;
  font-size: 0.875rem;
  background: #f2f2f2;
}
.icon-search-wrapper {
  position: absolute;
  left: 0.9375rem;
  top: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
}
.icon {
  fill: #999;
  width: 1rem;
  height: 1rem;
}
.icon-search {
  width: 100%;
  height: 100%;
}
.search-prompt {
  color: #b5b5b5;
}
</style>
