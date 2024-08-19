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
  <RightList :list @select="selectHandler" />
</template>

<style scoped lang="less"></style>
