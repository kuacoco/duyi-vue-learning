<script setup>
import DataForm from './DataForm.vue'
import DataList from './DataList.vue'

defineOptions({
  name: 'MessageArea',
  inheritAttrs: false
})

const props = defineProps({
  title: String,
  subTitle: String,
  list: Array,
  isListLoading: Boolean
})
</script>

<template>
  <div class="message-area-container">
    <DataForm v-bind="$attrs" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>
