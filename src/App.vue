<script>
import Layout from '@/components/Layout.vue'
import SiteAside from '@/components/SiteAside.vue'
import ToTop from '@/components/ToTop.vue'

export default {
  name: 'App',
  components: {
    SiteAside,
    Layout,
    ToTop
  }
}
</script>

<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <RouterView />
    </Layout>
    <ToTop />
  </div>
</template>

<style scoped lang="less">
@import '~@/styles/mixin.less';

.app-container {
  .self-fill(fixed);

  .aside {
    width: 250px;
    height: 100%;
  }
}
</style>
