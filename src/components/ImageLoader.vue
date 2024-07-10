<script>
export default {
  name: 'ImageLoader',
  emits: ['load'],
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      loaded: false,
      everythingDone: false
    }
  },
  methods: {
    onload: function () {
      this.loaded = true
      setTimeout(() => {
        this.everythingDone = true
        this.$emit('load')
      }, this.duration)
    }
  },
  computed: {
    opacity() {
      return this.loaded ? 1 : 0
    }
  }
}
</script>

<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="" />
    <img
      class="original"
      :style="{ opacity: opacity, transition: `${duration}ms` }"
      :src="src"
      alt=""
      @load="onload"
    />
  </div>
</template>

<style scoped>
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
}

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.placeholder {
  position: absolute;
  filter: blur(10px);
}

.original {
  position: relative;
}
</style>
