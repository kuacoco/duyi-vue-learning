<script>
import Avatar from '@/components/Avatar.vue'
import Icon from '@/components/Icon.vue'
import Pager from '@/components/Pager.vue'
import Empty from '@/components/Empty.vue'

export default {
  name: 'App',
  components: {
    Avatar,
    Icon,
    Pager,
    Empty
  },
  data: function () {
    return {
      current: 1
    }
  },
  methods: {
    pageChange: function (page) {
      this.current = page
    }
  }
}
</script>

<template>
  <Avatar url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg" :size="100" />
  <Icon type="qq" />
  <Pager :current="current" :total="128" :limit="10" :visibleNumber="5" @page-change="pageChange" />
  <div style="background-color: antiquewhite; border: 1px solid #dc6a12; height: 500px; width: 500px">
    <Empty />
  </div>
</template>

<style scoped>
.icon-container {
  color: aquamarine;
  font-size: 26px;
}
</style>
