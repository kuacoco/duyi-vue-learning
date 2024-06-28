<script>
import Avatar from '@/components/Avatar/Index.vue'
import Icon from '@/components/Icon/Index.vue'

export default {
  name: 'App',
  components: {
    Avatar,
    Icon
  }
}
</script>

<template>
  <Avatar url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg" :size="100" />
  <Icon type="qq" />
</template>

<style scoped>
.icon-container {
  color: aquamarine;
  font-size: 26px;
}
</style>
