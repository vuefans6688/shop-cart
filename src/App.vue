<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 禁止手机端扩大和缩小手势
window.onload = function () {
  document.addEventListener('touchstart',  event => {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener('gesturestart', event => {
    event.preventDefault()
  })
}

</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
/** 解决 [Intervention] Unable to preventDefault 
inside passive event listener due to target being treated as
**/
* {
  touch-action: pan-y;
}
</style>
