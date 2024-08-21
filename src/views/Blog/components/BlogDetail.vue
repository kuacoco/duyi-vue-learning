<script setup>
import { formatDateTime } from '@/utils'
import 'highlight.js/styles/github.css'
import '@/styles/markdown.css'

const props = defineProps({
  data: { type: Object, required: true }
})
</script>

<template>
  <div class="blog-detail-container">
    <h1>{{ data.title }}</h1>
    <div class="aside">
      <span>日期: {{ formatDateTime(data.createDate) }}</span>
      <span>浏览: {{ data.scanNumber }}</span>
      <a href="#data-form-container">评论: {{ data.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'blogCategory',
          params: { categoryId: data.category.id }
        }"
        >{{ data.category.name }}
      </RouterLink>
    </div>
    <div v-html="data.htmlContent" class="markdown-body"></div>
  </div>
</template>

<style scoped lang="less">
@import '~@/styles/var.less';

.aside {
  font-size: 12px;
  color: @gray;

  span,
  a {
    margin-right: 15px;
  }
}

.markdown-body {
  margin: 2em 0;
}
</style>
