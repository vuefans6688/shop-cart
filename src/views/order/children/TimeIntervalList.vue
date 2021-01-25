<template>
  <div id="time-interval-list">
    <!-- 时间选择器 -->
    <van-popup v-model="showDateTimePopView"
      round
      lock-scroll
      closeable
      @closed="closePopView"
      :style="{ height: '70%' }"
      position="bottom">
      <!-- 头部 -->
      <div class="item-header">
        <span class="time-title">{{ $t('order.selectArrivalTime') }}:</span>
      </div>
      <div class="list-wrapper">
        <div class="left-content">
          <li class="category-item"
            v-for="(date, index) in leftDateData"
            :class="{selected: currentIndex === index}"
            @click="clickLeftLi(index)"
            :key="index">
            {{ date.time }}
          </li>
        </div>
        <div class="right-content">
          <!-- 今天 -->
          <li v-for="(time, index) in timeList.today "
            @click="clickTodayTimeList(index, time)"
            :class="{checked: todayIndex === index}"
            :key="index.id"
            v-show="!currentIndex">{{ time }}
            <van-icon name="success"
              style="margin-left:40%"
              v-if="todayIndex === index" />
          </li>
          <!-- 明天 -->
          <li v-for="(time, index) in timeList.tomorrow "
            :key="index.id"
            :class="{checked: tomorrowIndex === index}"
            @click="clickTomorrowTimeList(index, time)"
            v-show="currentIndex">{{ time }}
            <van-icon name="success"
              style="margin-left: 40%;"
              v-if="tomorrowIndex === index" />
          </li>

        </div>
      </div>
      <div class="sure-button" @click="sureCheckTime">
        {{ $t('order.comfirm') }}
      </div>
    </van-popup>
  </div>
</template>

<script type="text/javascript">
// 时间处理
import Moment from 'moment'
import 'moment/locale/zh-cn'
import { mapMutations } from 'vuex'
// npm install --save @types/twix  moment的插件处理时间区间
require('twix')
export default {
  props: {
    showDateTimePopView: Boolean
  },
  data () {
    return {
      currentIndex: 0,
      chooseDeliveryTime: '',
      todayIndex: 0,
      tomorrowIndex: 0,
      currentItem: 0
    }
  },
  computed: {
    // 今天时间和明天时间
    leftDateData () {
      let date = new Date()
      let today = this.$t('order.today')
      let tomory = this.$t('order.tomorrow')
      let dateArray = [{ "time": today }, { "time": tomory }]
      return dateArray
    },
    //  时间段
    timeList () {
      let times = Moment(new Date()).format().split('T')[0]
      // 当前时间
      let nowTime = Moment(new Date()).format('LT')
      // 把时间分割出来
      let hour = Number(nowTime.split(':')[0])
      // 把分钟延迟15分钟
      let min = Number(nowTime.split(':')[1]) + 15
      // 和30作比较设置配送时间
      if (min < 30) {
        min = 30
      } else {
        hour += 1
        min = '00'
      }
      let newTime = hour + ":" + min
      let todayTimeArray = this.timeIntervalList(newTime, "23:00")
      let tomorrowTimeArray = this.timeIntervalList("07:00", "23:00")
      return { "today": todayTimeArray, "tomorrow": tomorrowTimeArray }
    }
  },
  methods: {
    ...mapMutations(['ORDER_TIMEINTERVAL']),
    // 时间区间段换算
    timeIntervalList (startTime, endTime) {
      // 获取当前时间并分割出年月日
      let nowDate = Moment(new Date()).format().split('T')[0]
      // 使用Moment插件对时间进行分割
      let t = Moment(nowDate + "T" + startTime).twix(nowDate + "T" + endTime)
      return t.split(30, 'minutes').map(s => s.format({ hideDate: true }))
    },
    // 点击今天
    clickTodayTimeList (index, time) {
      this.todayIndex = index
      this.chooseDeliveryTime = time
    },
    // 点击明天
    clickTomorrowTimeList (index, time) {
      this.tomorrowIndex = index
      this.chooseDeliveryTime = time
    },
    // 确认选择时间
    sureCheckTime () {
      let date = this.currentIndex === 0 ? this.$t('order.today') : this.$t('order.tomorrow')
      if (this.chooseDeliveryTime.length < 1) {
        // 设置默认值
        let fristTodayData = this.timeList.today[0]
        let secondDayData = this.timeList.tomorrow[0]
        this.chooseDeliveryTime = this.currentIndex === 0 ? fristTodayData : secondDayData
      }
      this.$emit('changeData', false, date + this.chooseDeliveryTime)
    },
    clickLeftLi (index) {
      this.currentIndex = index
    },
    closePopView () {
      let date = this.currentIndex === 0 ? this.$t('order.today') : this.$t('order.tomorrow')
      this.$emit('changeData', false, date + this.chooseDeliveryTime)
    }
  }
}
</script>

<style lang="less" scoped>
#time-interval-list {
  .item-header {
    height: 2.5rem;
    line-height: 2.5rem;
    border-bottom: solid 0.01rem #e8e9e8;
    .time-title {
      font-size: 0.8rem;
      margin-left: 40%;
    }
  }
  .integral-to-money {
    color: red;
  }
  .list-wrapper {
    display: flex;
    position: absolute;
    top: 2.75rem;
    bottom: 3rem;
    width: 100%;
    overflow: hidden;
    .left-content {
      background-color: #f4f4f4;
      width: 5.3125rem;
      flex: 0 0 5.3125rem;
      .category-item {
        text-align: left;
        height: 2rem;
        line-height: 2rem;
        padding: 0.3rem;
        font-size: 0.7rem;
        list-style-type: none;
        border-bottom: solid 0.01rem #e8e9e8;
        position: relative;
      }
    }
    .selected {
      background: #fff;
      font-weight: bold;
      font-size: 0.875rem;
      color: #333333;
    }
    .right-content {
      left: 5.2rem;
      right: 0;
      top: 0rem;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      li {
        list-style-type: none;
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        padding-left: 0.7rem;
        border-bottom: solid 0.01rem #e8e9e8;
      }
      .checked {
        color: #3bba63;
      }
    }
  }
  .sure-button {
    display: flex;
    position: absolute;
    justify-content: center;
    justify-items: center;
    bottom: 0rem;
    width: 90%;
    margin-left: 5%;
    border-radius: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 0.25rem;
    background-color: #3bba63;
    color: white;
  }
}
</style>
