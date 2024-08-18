<script setup>
import RightList from '@/views/Blog/components/RightList.vue'
import { useFetch } from '@/composables/fetch.js'
import { getBlogCategories } from '@/api/blog.js'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const { isLoading, data } = useFetch(getBlogCategories, [])

const categoryId = computed(() => {
  return +route.params.categoryId
})

const list = computed(() => {
  const totalBlogCount = data.value.reduce((a, b) => {
    return a + b.articleCount
  }, 0)

  const result = [{ id: -1, name: '全部', articleCount: totalBlogCount }, ...data.value]

  return result.map((item) => {
    return {
      isSelect: categoryId.value === item.id,
      aside: `${item.articleCount}篇`,
      ...item
    }
  })
})

function selectHandler(e) {
  const query = {
    page: 1,
    limit: route.query.limit
  }
  if (e.id !== -1) {
    router.push({
      name: 'blogCategory',
      params: {
        categoryId: e.id
      },
      query
    })
  } else {
    router.push({
      name: 'blog',
      query
    })
  }
}
</script>

<template>
  <div v-loading="isLoading" class="blog-category-container">
    <h2>文章分类</h2>
    <RightList :list @select="selectHandler" />
  </div>
</template>

<style scoped lang="less">
.blog-category-container {
  height: 100%;
  width: 300px;
  position: relative;
}
</style>
