(function (document, win) {
  let documentElement = document.documentElement,
  resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
    let clientWidth = documentElement.clientWidth
    if (!clientWidth) return
    documentElement.style.fontSize = 15 * (clientWidth / 320) + 'px'
  }
  if (!document.addEventListener) return
  win.addEventListener(resizeEvent, recalc, false)
  document.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)