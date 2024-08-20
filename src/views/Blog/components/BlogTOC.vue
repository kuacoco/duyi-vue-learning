<script setup>
import RightList from '@/views/Blog/components/RightList.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const props = defineProps({
  toc: {
    type: Array,
    required: true
  }
})

const list = computed(() => {
  const mapFn = (item) => {
    return {
      isSelect: route.hash.substring(1) === item.anchor,
      ...item,
      children: item.children ? item.children.map(mapFn) : undefined
    }
  }
  return props.toc.map(mapFn)
})

function selectHandler(e) {
  location.hash = e.anchor
}
</script>

<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list @select="selectHandler" />
  </div>
</template>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
