<script setup>
import { inject, onMounted, onUnmounted, ref } from 'vue'

const show = ref(false)
const eventBus = inject('eventBus')

function clickHandler() {
  eventBus.emit('scrollToTop')
}

function mainScrollHandler(el) {
  if (!el) {
    show.value = false
    return
  }

  show.value = el.scrollTop > 500
}

onMounted(() => {
  eventBus.on('mainScroll', mainScrollHandler)
})
onUnmounted(() => {
  eventBus.off('mainScroll', mainScrollHandler)
})
</script>

<template>
  <div @click="clickHandler" v-show="show" class="to-top-container">Top</div>
</template>

<style scoped lang="less">
@import '~@/styles/var.less';

.to-top-container {
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  line-height: 50px;
  color: #fff;
  text-align: center;
}
</style>
