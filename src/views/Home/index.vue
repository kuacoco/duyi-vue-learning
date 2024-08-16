<template>
  <div v-loading="isLoading" class="home-container" ref="home">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @wheel="handleWheel"
      @transitionend="switching = false"
    >
      <li v-for="banner in data" :key="banner.id">
        <CarouselItem :item="banner" />
      </li>
    </ul>
    <div v-show="index > 0" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div v-show="index < data.length - 1" class="icon icon-down" @click="switchTo(index + 1)">
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(banner, i) in data"
        :key="banner.id"
        :class="{ active: i === index }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import CarouselItem from '@/views/Home/CarouselItem.vue'
import Icon from '@/components/Icon.vue'
import { getBanner } from '@/api/banner.js'
import { useFetch } from '@/composables/fetch.js'

export default {
  components: { CarouselItem, Icon },
  data() {
    return {
      index: 0,
      containerHeight: 0,
      switching: false
    }
  },
  setup() {
    const { isLoading, data } = useFetch(getBanner, [])
    return { isLoading, data }
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleWheel: function (e) {
      if (this.switching) {
        return
      }
      if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.switching = true
        this.switchTo(this.index + 1)
      } else if (e.deltaY < -5 && this.index > 0) {
        this.switching = true
        this.switchTo(this.index - 1)
      }
    },
    handleResize: function () {
      this.containerHeight = this.$refs.home.clientHeight
    },
    switchTo: function (index) {
      this.index = index
    }
  },
  computed: {
    marginTop: function () {
      return -this.index * this.containerHeight + 'px'
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
@import '~@/styles/mixin.less';

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 0.3s;

    li {
      width: 100%;
      height: 100%;
    }
  }

  .icon {
    .self-center();
    transform: translateX(-50%);
    color: @gray;
    font-size: 30px;
    cursor: pointer;
    @gap: 25px;
    @dis: 5px;
    @keyframes arrowUp {
      0% {
        transform: translateY(-@dis);
      }
      50% {
        transform: translateY(@dis);
      }
      100% {
        transform: translateY(-@dis);
      }
    }
    @keyframes arrowDown {
      0% {
        transform: translateY(@dis);
      }
      50% {
        transform: translateY(-@dis);
      }
      100% {
        transform: translateY(@dis);
      }
    }

    &-up {
      top: @gap;
      animation: arrowUp 2s infinite;
    }

    &-down {
      top: auto;
      bottom: @gap;
      animation: arrowDown 2s infinite;
    }
  }

  .indicator {
    .self-center();
    right: 20px;
    left: auto;
    transform: translateY(-50%);

    li {
      width: 7px;
      height: 7px;
      background: @words;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-top: 10px;
      cursor: pointer;
      box-sizing: border-box;

      &.active {
        background: #fff;
      }
    }
  }
}
</style>
