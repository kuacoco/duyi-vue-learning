<template>
  <div class="home-container" ref="home">
    <h1>首页</h1>
    <button @click="click">点我</button>
  </div>
</template>

<script>
export default {
  methods: {
    click: function () {
      this.$showMessage({
        content: '发表成功啦！！',
        type: 'success',
        duration: 2000,
        container: this.$refs.home,
        callback: () => console.log('完成')
      })
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  width: 60%;
  height: 500px;
  background: beige;
}
</style>
