<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'Empty',
  components: { Icon },
  props: {
    text: {
      type: String,
      default: '无数据'
    }
  }
}
</script>

<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<style scoped lang="less">
@import '~@/styles/mixin.less';
@import '~@/styles/var.less';

.empty-container {
  .self-center();
  text-align: center;
  color: @gray;
}

.icon-container {
  font-size: 72px;
}
</style>
