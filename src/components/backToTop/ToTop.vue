<template>
  <transition name="moveR">
    <div class="scroll-top" v-show="showTop" @click="toTop">
      <svg-icon iconClass="backtotop" class="back-to-top" />
    </div>
  </transition>
</template>

<script>
import SvgIcon from "../SvgIcon/index"
export default {
  components: { SvgIcon },
  name: 'scroll-top',
  data () {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0
    }
  },
  computed: {
    showTop () {
      return this.scrollTop > 200 ? true : false
    }
  },
  mounted () {
    // 监听scroll事件
    window.addEventListener('scroll', this.throttler(this.getScrollTop, 300))
  },
  methods: {
    // 回到顶部
    toTop () {
      const timer = setInterval(() => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let speed = Math.floor(-scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed
        this.isTop = true
        if (scrollTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    },
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },
    // 创建一个节流函数用来减少getScrollTop方法的执行 
    // 固定时间为300ms
    throttler (func, time) {
      let timeOut = null
      // 创建闭包
      return function () {
        clearTimeout(timeOut)
        timeOut = setTimeout(() => {
          func.apply(this, arguments)
        }, time)
      }
    },
    destroyed () {
      //移除scroll事件监听
      window.removeEventListener('scroll', this.getScrollTop)
    }
  }
}
</script>

<style scoped>
.back-to-top {
  width: 2.5rem;
  height: 2.5rem;
}
.scroll-top {
  right: 0;
  position: fixed;
  bottom: 5rem;
  cursor: pointer;
  z-index: 100;
}
.moveR-enter-active,
.moveR-leave-active {
  transition: all 0.2s linear;
  transform: translateX(0);
}
.moveR-enter,
.moveR-leave {
  transform: translateX(100%);
}
.moveR-leave-to {
  transform: translateX(100%);
}
</style>