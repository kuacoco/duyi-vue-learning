<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'Menu',
  components: { Icon },
  data: function () {
    return {
      items: [
        {
          name: 'home',
          title: '首页',
          icon: 'home'
        },
        {
          name: 'blog',
          title: '文章',
          icon: 'blog',
          startWith: true // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          name: 'about',
          title: '关于我',
          icon: 'about'
        },
        {
          name: 'project',
          title: '项目&效果',
          icon: 'code'
        },
        {
          name: 'message',
          title: '留言板',
          icon: 'chat'
        }
      ]
    }
  },
  methods: {}
}
</script>

<template>
  <nav class="menu-container">
    <RouterLink
      v-for="item in items"
      :key="item.name"
      :to="{ name: item.name }"
      activeClass="selected"
    >
      <Icon :type="item.icon" />
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<style scoped lang="less">
@import '~@/styles/var.less';

.menu-container {
  color: @gray;
  margin: 24px 0;

  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    column-gap: 4px;
    height: 45px;
    padding: 0 50px;

    &.selected {
      background: darken(@words, 3%);
    }

    &:hover {
      color: #fff;
    }
  }
}
</style>
