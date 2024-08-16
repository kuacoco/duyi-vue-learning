<script setup>
import Layout from '@/components/Layout.vue'
import BlogList from '@/views/Blog/components/BlogList.vue'
import BlogCategory from '@/views/Blog/components/BlogCategory.vue'
</script>

<template>
  <div class="blog-container">
    <Layout>
      <BlogList />
      <template #right>
        <BlogCategory />
      </template>
    </Layout>
  </div>
</template>

<style scoped lang="less">
.blog-container {
  height: 100%;
}
</style>
