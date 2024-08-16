<template>
  <div class="blog-container">
    <h1>文章</h1>
    <div class="list-container">
      <RightList :list @select="selectHandler" />
    </div>
  </div>
</template>

<script>
import RightList from '@/views/Blog/components/RightList.vue'

export default {
  components: {
    RightList
  },
  data() {
    return {
      list: [
        { name: 'a', isSelect: false },
        { name: 'b', isSelect: false },
        {
          name: 'c',
          isSelect: true,
          children: [
            { name: 'c-1', isSelect: false },
            {
              name: 'c-2',
              isSelect: false,
              children: [
                { name: 'c-2-1', isSelect: false },
                { name: 'c-2-2', isSelect: false },
                { name: 'c-2-3', isSelect: false },
                { name: 'c-2-4', isSelect: false }
              ]
            },
            { name: 'c-3', isSelect: false },
            { name: 'c-4', isSelect: false }
          ]
        },
        { name: 'd', isSelect: false }
      ]
    }
  },
  methods: {
    selectHandler: function (item) {
      console.log(item)
    }
  }
}
</script>

<style scoped lang="less">
.blog-container {
  height: 100%;
  display: flex;

  .list-container {
    flex: 1;
  }
}
</style>
