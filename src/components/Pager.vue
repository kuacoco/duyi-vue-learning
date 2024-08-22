<script>
export default {
  name: 'Pager',
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    visibleNumber: {
      type: Number,
      default: 10
    }
  },
  emits: ['pageChange'],
  computed: {
    maxPageNumber: function () {
      return Math.ceil(this.total / this.limit)
    },
    pageNumbers: function () {
      if (this.maxPageNumber > this.visibleNumber) {
        let min = this.current - Math.floor(this.visibleNumber / 2)
        if (min <= 0) {
          min = 1
        }
        if (min + this.visibleNumber - 1 > this.maxPageNumber) {
          min = this.maxPageNumber - this.visibleNumber + 1
        }
        return Array(this.visibleNumber)
          .fill(0)
          .map((item, i) => min + i)
      } else {
        return Array(this.maxPageNumber)
          .fill(0)
          .map((item, i) => 1 + i)
      }
    }
  }
}
</script>

<template>
  <div class="pager-container">
    <a
      v-show="pageNumbers.length > 1"
      :class="{ disabled: current === 1 }"
      @click="$emit('pageChange', 1)"
    >
      |<<
    </a>
    <a
      v-show="pageNumbers.length > 1"
      :class="{ disabled: current === 1 }"
      @click="$emit('pageChange', current - 1)"
    >
      <<
    </a>
    <a
      v-for="(page, i) in pageNumbers"
      :key="i"
      :class="{ active: page === current }"
      @click="$emit('pageChange', page)"
    >
      {{ page }}
    </a>
    <a
      v-show="pageNumbers.length > 1"
      :class="{ disabled: current === maxPageNumber }"
      @click="$emit('pageChange', current + 1)"
    >
      >>
    </a>
    <a
      v-show="pageNumbers.length > 1"
      :class="{ disabled: current === maxPageNumber }"
      @click="$emit('pageChange', maxPageNumber)"
    >
      >>|
    </a>
  </div>
</template>

<style scoped lang="less">
@import '../styles/var.less';

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    color: @primary;
    cursor: pointer;
    margin: 0 6px;

    &.active {
      font-weight: bold;
      color: @words;
      cursor: text;
    }

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
  }
}
</style>
