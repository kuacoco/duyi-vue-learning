<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'Menu',
  components: { Icon },
  data: function () {
    return {
      items: [
        {
          link: '/',
          title: '首页',
          icon: 'home'
        },
        {
          link: '/blog',
          title: '文章',
          icon: 'blog',
          startWith: true // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          link: '/about',
          title: '关于我',
          icon: 'about'
        },
        {
          link: '/project',
          title: '项目&效果',
          icon: 'code'
        },
        {
          link: '/message',
          title: '留言板',
          icon: 'chat'
        }
      ]
    }
  },
  methods: {
    isSelected: function (item) {
      const link = item.link.toLowerCase()
      const curPathname = location.pathname.toLowerCase()
      if (item.startWith) {
        return curPathname.startsWith(link)
      } else {
        return curPathname === link
      }
    }
  }
}
</script>

<template>
  <nav class="menu-container">
    <a
      v-for="item in items"
      :key="item.link"
      :href="item.link"
      :class="{ selected: isSelected(item) }"
    >
      <Icon :type="item.icon" />
      <span>{{ item.title }}</span>
    </a>
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
