<template>
  <div class="search-icon">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- eslint-disable max-len -->
      <path
        d="M28.1436 25.5979L35.9971 32.9504L32.7843 36L24.5738 28.2715C22.5658 29.3159 20.2454 29.9008 17.8358 29.9008C10.2054 29.9008 4.00287 24.094 4.00287 16.9504C4.00287 9.80679 10.2054 4 17.8358 4C25.4662 4 31.7134 9.80679 31.7134 16.9504C31.7134 20.2924 30.3301 23.342 28.1436 25.5979ZM8.59897 16.9504C8.59897 21.7546 12.7042 25.5979 17.8358 25.5979C22.9674 25.5979 27.0726 21.7546 27.0726 16.9504C27.0726 12.1462 22.9674 8.30287 17.8358 8.30287C12.7042 8.30287 8.59897 12.1462 8.59897 16.9504Z"
        :fill="color"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SearchIcon',
  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .search-icon {
    width: 40px;
    height: 40px;
  }
</style>
