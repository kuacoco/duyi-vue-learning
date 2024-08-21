<script setup>
import RightList from '@/views/Blog/components/RightList.vue'
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { debounce } from '@/utils/index.js'

const eventBus = inject('eventBus')
const route = useRoute()
const router = useRouter()
const props = defineProps({
  toc: {
    type: Array,
    required: true
  }
})
const activeAnchor = ref('')
const list = computed(() => {
  const mapFn = (item) => {
    return {
      isSelect: activeAnchor.value === item.anchor,
      ...item,
      children: item.children ? item.children.map(mapFn) : undefined
    }
  }
  return props.toc.map(mapFn)
})
const doms = computed(() => {
  const doms = []
  const addToDoms = (items) => {
    for (const item of items) {
      doms.push(document.getElementById(item.anchor))
      if (item.children && item.children.length > 0) {
        addToDoms(item.children)
      }
    }
  }
  addToDoms(props.toc)
  return doms
})

function selectHandler(e) {
  location.hash = e.anchor
}

function setActiveAnchor() {
  activeAnchor.value = ''
  const range = 200
  for (const dom of doms.value) {
    if (!dom) {
      continue
    }
    const top = dom.getBoundingClientRect().top
    if (top >= 0 && top <= range) {
      activeAnchor.value = dom.id
    } else if (top > range) {
    } else {
      activeAnchor.value = dom.id
    }
  }
}

const mainscrollHandler = debounce(setActiveAnchor, 50)

onMounted(() => {
  eventBus.on('mainscroll', mainscrollHandler)
})

onUnmounted(() => {
  eventBus.off('mainscroll', mainscrollHandler)
})
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
