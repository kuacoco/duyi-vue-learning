<script>
export default {
  name: 'Avatar',
  props: {
    url: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 50
    }
  }
}
</script>

<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
    alt="avatar"
  />
</template>

<style scoped>
.avatar-container {
  display: block;
  object-fit: cover;
  border-radius: 50%;
}
</style>
