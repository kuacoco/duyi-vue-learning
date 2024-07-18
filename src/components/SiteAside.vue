<script>
import Avatar from '@/components/Avatar.vue'
import Menu from '@/components/Menu.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'SiteAside',
  components: { Contact, Menu, Avatar }
}
</script>

<template>
  <div class="site-aside-container">
    <Avatar url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg" :size="150" />
    <h1 class="title">CC的小窝</h1>
    <Menu />
    <Contact />
    <p class="footer">黑ICP备17001719</p>
  </div>
</template>

<style scoped lang="less">
@import '~@/styles/var.less';

.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}

.avatar-container {
  margin: 0 auto;
}

.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}

.footer {
  font-size: 12px;
  text-align: center;
}
</style>
