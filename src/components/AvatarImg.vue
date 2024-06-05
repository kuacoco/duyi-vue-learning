<script>
export default {
  name: 'AvatarImg',
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
    class="avatar-img"
    :src="url"
    :width="size"
    :style="{ width: size + 'px', height: size + 'px' }"
    alt="avatar"
  />
</template>

<style scoped>
.avatar-img {
  display: block;
  object-fit: cover;
  border-radius: 50%;
}
</style>
