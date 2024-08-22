<script setup>
import { useFetch } from '@/composables/fetch.js'
import { getBlogList } from '@/api/blog.js'
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import Pager from '@/components/Pager.vue'
import { formatDateTime } from '@/utils/index.js'
import { useMainScroll } from '@/composables/mainScroll.js'

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
useMainScroll('mainContainer')

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

const mainContainer = ref()
watch(routeInfo, async (newValue) => {
  isLoading.value = true
  data.value = await fetchData()
  isLoading.value = false
  mainContainer.value.scrollTop = 0
})
</script>

<template>
  <div v-loading="isLoading" class="blog-list-container" ref="mainContainer">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb">
          <a href="">
            <img v-if="item.thumb" v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>
        <div class="main">
          <RouterLink :to="{ name: 'blogDetail', params: { id: item.id } }">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDateTime(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <RouterLink :to="{ name: 'blogCategory', params: { categoryId: item.category.id } }">
              {{ item.category.name }}
            </RouterLink>
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
