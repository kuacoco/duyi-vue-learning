<script setup>
import ImageLoader from '@/components/ImageLoader.vue'
import { onMounted, ref } from 'vue'

const props = defineProps(['item'])

const title = ref()
const desc = ref()

function handleLoad() {
  const titleWidth = title.value.clientWidth
  const descWidth = desc.value.clientWidth

  console.log(titleWidth, descWidth)

  title.value.style.width = 0
  title.value.style.opacity = 1
  desc.value.style.width = 0
  desc.value.style.opacity = 1
  title.value.clientWidth //reflow

  title.value.style.width = titleWidth + 'px'
  desc.value.style.width = descWidth + 'px'
}
</script>

<template>
  <div class="carousel-item-container">
    <ImageLoader :placeholder="item.midImg" :src="item.bigImg" @load="handleLoad" />
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
