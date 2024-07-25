<script>
export default {
  name: 'Layout'
}
</script>

<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="main">
      <slot name="default" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;

  .left,
  right {
    flex: 0 0 auto;
    overflow: hidden;
  }

  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>
