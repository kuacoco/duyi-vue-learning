<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe :src="data" @load="srcLoaded = true" frameborder="0" class="about-content"></iframe>
  </div>
</template>

<script setup>
import { mapState, useStore } from 'vuex'
import { computed, ref } from 'vue'

const srcLoaded = ref(false)

const store = useStore()
store.dispatch('about/fetchData')
const loading = computed(() => store.state.about.loading)
const data = computed(() => store.state.about.data)
</script>

<style>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>
