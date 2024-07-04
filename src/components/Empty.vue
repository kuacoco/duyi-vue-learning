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
    <div>{{ text }}</div>
  </div>
</template>

<style scoped>
.empty-container {
  width: 100px;
  text-align: center;
  margin: 0 auto;
}

.icon-container {
  font-size: 100px;
  color: var(--vt-c-text-light-2);
}
</style>
