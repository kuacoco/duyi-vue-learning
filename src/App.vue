<script>
import AvatarImg from '@/components/AvatarImg.vue'
import IconImg from '@/components/IconImg.vue'

export default {
  name: 'App',
  components: {
    AvatarImg,
    IconImg
  }
}
</script>

<template>
  <AvatarImg url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg" :size="100" />
  <IconImg type="home" />
</template>

<style scoped>
.iconfont {
  color: aquamarine;
  font-size: 26px;
}
</style>
