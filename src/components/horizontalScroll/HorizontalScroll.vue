<template>
  <div id="horizontal-scroll">
    <!-- 水平滑动 -->
    <div class="menu-title-wrapper" ref="menuTitleWrapper">
      <ul ref="menuTitleUlContent">
        <li class="menu-titles"
          :class="{ selected: currentSubTitle === index }"
          v-for="(item, index) in menuTitlesArray"
          :key="item.id"
          ref="menuTitles"
          @click="menuTitleClick(index)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
  props: {
    // 接受父组件传递的数据
    menuTitlesArray: Array
  },
  mounted () {
    this.$nextTick(() => {
      this._initHorizontalScroll()
    })
  },
  data () {
    return {
      currentSubTitle: 0,
      isShowDropMenu: true,
      menuDown: true
    }
  },
  components: {
    DropMenu
  },
  methods: {
    // 初始化滚动
    _initHorizontalScroll () {
      let contentWrapperWidth = 0
      let el = this.$refs.menuTitles
      for (let i = 0; i < el.length; i++) {
        contentWrapperWidth += el[i].clientWidth
      }
      // 1.1给ul设置宽度,保证可以横向滚动
      this.$refs.menuTitleUlContent.style.width = contentWrapperWidth + 'px'
      if (!this.horizontalScroll) {
        this.horizontalScroll = new BScroll('.menuTitleWrapper', {
          probeType: 3,
          startX: 0,
          click: true,
          scrollX: true
        })
      } else {
        this.horizontalScroll.refresh()
      }
    },
    // 点击标题
    menuTitleClick (index) {
      // 让横向滑动到合适位置
      this.currentSubTitle = index
      let el = this.$refs.menuTitles[index]
      this.horizontalScroll.scrollToElement(el, 500)
    }
  }
}
</script>

<style lang="less" scoped>
#horizontal-scroll {
  .menu-title-wrapper {
    position: relative;
    width: 100%;
    height: 2.8rem;
    display: inline-block;
    white-space: nowrap;
    border-bottom: solid 0.01rem #e8e9e8;
    overflow: hidden;
    background-color: white;
    .menu-titles {
      display: inline-block;
      font-size: 0.73rem;
      padding: 1rem;
    }
    .selected {
      color: #3cb963;
    }
    .show-menu {
      position: absolute;
      width: 10%;
      top: -0.1rem;
      right: 0;
      padding-right: 0.5rem;
      height: 2.8rem;
      line-height: 2.8rem;
      background-color: #ffffff;
      .menu-icon {
        width: 100%;
        height: 2.8rem;
      }
    }
  }
}
</style>
