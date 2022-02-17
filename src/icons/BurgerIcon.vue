<template>
  <div class="burger-icon">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- eslint-disable max-len -->
      <path
        d="M32 12.0004V8.40039H8V12.0004H32ZM32 20.2004V16.6004H8V20.2004H32ZM32 28.4004V24.8004H8V28.4004H32Z"
        :fill="color"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BurgerIcon',
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

  .burger-icon {
    width: 40px;
    height: 40px;
  }
</style>
