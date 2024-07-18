<script>
import Icon from '@/components/Icon.vue'
import Pager from '@/components/Pager.vue'
import Empty from '@/components/Empty.vue'
import ImageLoader from '@/components/ImageLoader.vue'
import SiteAside from '@/components/SiteAside.vue'
import SiteAsideT from '@/components/SiteAside/index.vue'

export default {
  name: 'App',
  components: {
    SiteAside,
    SiteAsideT,
    Icon,
    Pager,
    Empty,
    ImageLoader
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
  <div class="container">
    <SiteAsideT />
    <SiteAside />
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: scroll;
}

.site-aside-container {
  flex: 1;
}
</style>
