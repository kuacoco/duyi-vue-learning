<script>
import Avatar from '@/components/Avatar.vue'
import Menu from '@/components/Menu.vue'
import Contact from '@/components/Contact.vue'
import { mapState } from 'vuex'

export default {
  name: 'SiteAside',
  components: { Contact, Menu, Avatar },
  computed: mapState('setting', ['data'])
}
</script>

<template>
  <div class="site-aside-container">
    <Avatar v-if="data" :url="data.avatar" :size="150" />
    <h1 class="title" v-if="data">{{ data.siteTitle }}</h1>
    <Menu />
    <Contact />
    <p v-if="data" class="footer">{{ data.icp }}</p>
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
