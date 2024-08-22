import { getCurrentInstance, inject, onMounted, onUnmounted, ref } from 'vue'

export function useMainScroll(refName) {
  const eventBus = inject('eventBus')
  let el = null

  function scrollHandler() {
    eventBus.emit('mainScroll', el)
  }

  function scrollToTopHandler() {
    el.scrollTop = 0
  }

  onMounted(() => {
    el = getCurrentInstance().refs[refName]
    el.addEventListener('scroll', scrollHandler)
    eventBus.on('scrollToTop', scrollToTopHandler)
  })

  onUnmounted(() => {
    el.removeEventListener('scroll', scrollHandler)
    eventBus.off('scrollToTop', scrollToTopHandler)
  })
}
