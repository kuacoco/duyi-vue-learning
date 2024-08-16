<script setup>
const props = defineProps({
  list: Array
})
const emit = defineEmits(['select'])

const clickHandler = (e) => {
  emit('select', e)
}
</script>

<template>
  <ul class="right-list-container">
    <li v-for="(li, i) in list" :key="i">
      <span @click="clickHandler(li)" :class="{ active: li.isSelect }">{{ li.name }}</span>
      <span
        v-if="li.aside"
        @click="clickHandler(li)"
        class="aside"
        :class="{ active: li.isSelect }"
      >
        {{ li.aside }}
      </span>
      <RightList :list="li.children" @select="clickHandler" />
    </li>
  </ul>
</template>

<style scoped lang="less">
@import '~@/styles/var';

.right-list-container {
  list-style: none;
  padding: 0;

  .right-list-container {
    margin-left: 1em;
  }

  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;

    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}

.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>
