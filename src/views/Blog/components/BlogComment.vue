<script setup>
import MessageArea from '@/components/MessageArea/index.vue'
import { useFetch } from '@/composables/fetch.js'
import { getCommentList, postComment } from '@/api/blog.js'
import { useRoute } from 'vue-router'
import { computed, inject, onMounted, onUnmounted } from 'vue'

let page = 1
const eventBus = inject('eventBus')
const route = useRoute()
const { isLoading, data } = useFetch(fetchData, { total: 0, rows: [] })
const hasMore = computed(() => {
  return data.value.rows.length < data.value.total
})

function fetchData() {
  return getCommentList(route.params.id, page)
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
  const range = 200
  const dis = Math.abs(el.scrollHeight - (el.scrollTop + el.clientHeight))
  if (dis < range) {
    fetchMore()
  }
}

async function submitHandler(formData, callback) {
  const res = await postComment({
    nickname: formData.nickname,
    content: formData.content,
    blogId: route.params.id
  })
  data.value.total++
  data.value.rows.unshift(res)
  callback('评论成功')
}

onMounted(() => {
  eventBus.on('mainScroll', scrollHandler)
})

onUnmounted(() => {
  eventBus.off('mainScroll', scrollHandler)
})
</script>

<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :sub-title="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="submitHandler"
    />
  </div>
</template>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>
