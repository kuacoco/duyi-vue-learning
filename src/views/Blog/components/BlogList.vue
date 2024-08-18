<script setup>
import { useFetch } from '@/composables/fetch.js'
import { getBlogList } from '@/api/blog.js'
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import Pager from '@/components/Pager.vue'

const route = useRoute()
const router = useRouter()
const routeInfo = computed(() => {
  return {
    page: +route.query.page || 1,
    limit: +route.query.limit || 10,
    categoryId: +route.params.categoryId || -1
  }
})
const fetchData = () => {
  return getBlogList(routeInfo.value.page, routeInfo.value.limit, routeInfo.value.categoryId)
}
const { isLoading, data } = useFetch(fetchData, [])

function pageChangeHandler(e) {
  const query = {
    page: e,
    limit: routeInfo.value.limit
  }
  if (routeInfo.value.categoryId !== -1) {
    router.push({
      name: 'blogCategory',
      params: {
        categoryId: routeInfo.value.categoryId
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

const container = ref()
watch(
  () => routeInfo.value.page,
  async (newValue) => {
    isLoading.value = true
    container.value.scrollTop = 0
    data.value = await fetchData()
    isLoading.value = false
  }
)
</script>

<template>
  <div v-loading="isLoading" class="blog-list-container" ref="container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb">
          <a href="">
            <img v-if="item.thumb" :src="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>
          <div class="aside">
            <span>日期：{{ item.createDate }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <a :href="`/article/cate/${item.category.id}`" class="">{{ item.category.name }}</a>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      :total="data.total"
      @page-change="pageChangeHandler"
    />
  </div>
</template>

<style scoped lang="less">
@import '~@/styles/var.less';
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
