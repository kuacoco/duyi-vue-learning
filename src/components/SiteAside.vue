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
    <Menu />
    <Contact />
    <div class="record">黑ICP备17001719</div>
  </div>
</template>

<style scoped>
.avatar-container {
  margin: 10px auto;
}

.menu-container,
.contact-container,
.record {
  margin: 20px 0;
}

.site-aside-container {
  background: #4b4b4b;
  overflow: hidden;
}

.record {
  text-align: center;
  font-size: 0.8em;
  color: #666;
}
</style>
