<script setup>
import MessageArea from '@/components/MessageArea/index.vue'
import { useFetch } from '@/composables/fetch.js'
import { getCommentList, postComment } from '@/api/blog.js'
import { useRoute } from 'vue-router'

const route = useRoute()
const { isLoading, data } = useFetch(fetchData, { total: 0, rows: [] })

function fetchData() {
  return getCommentList(route.params.id)
}

async function submitHandler(formData) {
  const res = await postComment({
    nickname: formData.nickname,
    content: formData.content,
    blogId: route.params.id
  })

  console.log(res)
}
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
