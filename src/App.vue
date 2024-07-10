<script>
import Avatar from '@/components/Avatar.vue'
import Icon from '@/components/Icon.vue'
import Pager from '@/components/Pager.vue'
import Empty from '@/components/Empty.vue'
import ImageLoader from '@/components/ImageLoader.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'App',
  components: {
    Avatar,
    Icon,
    Pager,
    Empty,
    ImageLoader,
    Contact,
  },
  data: function () {
    return {
      current: 1
    }
  },
  methods: {
    pageChange: function (page) {
      this.current = page
    },

    loaded: function () {
      console.log('img components loaded')
    }
  }
}
</script>

<template>
  <Contact />
  <Avatar url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg" :size="100" />
  <Icon type="qq" />
  <Pager :current="current" :total="128" :limit="10" :visibleNumber="5" @page-change="pageChange" />
  <div
    style="background-color: antiquewhite; border: 1px solid #dc6a12; height: 500px; width: 500px"
  >
    <Empty />
  </div>
  <ImageLoader
    src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
    placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
    @load="loaded"
  />
</template>

<style scoped>
.icon-container {
  color: aquamarine;
  font-size: 26px;
}

.contact-container {
  background-color: #4b4b4b;
}
</style>
