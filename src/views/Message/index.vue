<template>
  <div class="message-container" ref="mainContainer">
    <MessageArea
      title="评论列表"
      :sub-title="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="submitHandler"
    />
  </div>
</template>

<script setup>
import MessageArea from '@/components/MessageArea/index.vue'
import { useFetch } from '@/composables/fetch.js'
import { getMessages, postMessage } from '@/api/message.js'
import { computed, inject, onMounted, onUnmounted } from 'vue'
import { useMainScroll } from '@/composables/mainScroll.js'

let page = 1
useMainScroll('mainContainer')
const eventBus = inject('eventBus')
const { isLoading, data } = useFetch(fetchData, { total: 0, rows: [] })
const hasMore = computed(() => {
  return data.value.rows.length < data.value.total
})

function fetchData() {
  return getMessages(page)
}

async function fetchMore() {
  if (!hasMore.value || isLoading.value) {
    return
  }
  isLoading.value = true
  page++
  const res = await fetchData()
  data.value.rows = data.value.rows.concat(res.rows)
  data.value.total = res.total
  isLoading.value = false
}

function scrollHandler(el) {
  if (!el) {
    return
  }
  const range = 200
  const dis = Math.abs(el.scrollHeight - (el.scrollTop + el.clientHeight))
  if (dis < range) {
    fetchMore()
  }
}

async function submitHandler(formData, callback) {
  const res = await postMessage({
    nickname: formData.nickname,
    content: formData.content
  })
  data.value.total++
  data.value.rows.unshift(res)
  callback('留言成功')
}

onMounted(() => {
  eventBus.on('mainScroll', scrollHandler)
})

onUnmounted(() => {
  eventBus.off('mainScroll', scrollHandler)
})
</script>

<style>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>
