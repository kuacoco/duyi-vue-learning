<script>
import Layout from '@/components/Layout.vue'
import SiteAside from '@/components/SiteAside.vue'

export default {
  name: 'App',
  components: {
    SiteAside,
    Layout
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
      <div>主区域，宽度占满剩余空间，溢出隐藏</div>
    </Layout>
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
