<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'Menu',
  components: { Icon }
}
</script>

<template>
  <div class="menu-container">
    <a href="/">
      <Icon type="home" />
      首页
    </a>
    <a href="/blog">
      <Icon type="blog" />
      文章
    </a>
    <a href="/about">
      <Icon type="about" />
      关于我
    </a>
    <a href="/project">
      <Icon type="code" />
      项目&效果
    </a>
    <a href="/message">
      <Icon type="chat" />
      留言板
    </a>
  </div>
</template>

<style scoped>
a {
  display: flex;
  align-items: center;
  cursor: pointer;
  column-gap: 4px;
  line-height: 32px;
  padding: 4px 30px;
}
</style>
