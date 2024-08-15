<script setup>
import ImageLoader from '@/components/ImageLoader.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps(['item'])

const innerSize = ref({ width: 0, height: 0 })
const outerSize = ref({ width: 0, height: 0 })
const title = ref()
const desc = ref()
const container = ref()
const image = ref()
const left = ref(0)
const top = ref(0)
const position = computed(() => {
  return { transform: `translate(${left.value}px, ${top.value}px)` }
})
const center = computed(() => {
  return {
    left: (innerSize.value.width - outerSize.value.width) / 2,
    top: (innerSize.value.height - outerSize.value.height) / 2
  }
})

function loadHandler() {
  const titleWidth = title.value.clientWidth
  const descWidth = desc.value.clientWidth

  title.value.style.width = 0
  title.value.style.opacity = 1
  desc.value.style.width = 0
  desc.value.style.opacity = 1
  title.value.clientWidth //reflow

  title.value.style.width = titleWidth + 'px'
  desc.value.style.width = descWidth + 'px'
}

function mouseMoveHandler(e) {
  left.value = ((innerSize.value.width - outerSize.value.width) / outerSize.value.width) * e.offsetX
  top.value =
    ((innerSize.value.height - outerSize.value.height) / outerSize.value.height) * e.offsetY
}

function mouseLeaveHandler() {
  left.value = center.value.left
  top.value = center.value.top
}

function resizeHandler() {
  innerSize.value = {
    width: container.value.clientWidth,
    height: container.value.clientHeight
  }
  outerSize.value = {
    width: image.value.clientWidth,
    height: image.value.clientHeight
  }
}

onMounted(() => {
  resizeHandler()
  window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})
</script>

<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="mouseMoveHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <div class="image" :style="position" ref="image">
      <ImageLoader :placeholder="item.midImg" :src="item.bigImg" @load="loadHandler" />
    </div>
    <div class="title" ref="title">{{ item.title }}</div>
    <div class="desc" ref="desc">{{ item.description }}</div>
  </div>
</template>

<style scoped lang="less">
@import '@/styles/var.less';
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;

  .image {
    width: 110%;
    height: 110%;
    position: absolute;
    transition: 0.5s;
  }

  .title {
    position: absolute;
    left: 50px;
    top: calc(70%);
    font-size: 2em;
    text-shadow:
      1px 0 0 @words,
      -1px 0 0 @words,
      0 1px 0 @words,
      0 -1px 0 @words;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
    transition: width 1s;
  }

  .desc {
    position: absolute;
    left: 50px;
    top: calc(70% + 50px);
    font-size: 1.2em;
    text-shadow:
      1px 0 0 @words,
      -1px 0 0 @words,
      0 1px 0 @words,
      0 -1px 0 @words;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
    transition: width 2s 1s;
  }
}
</style>
