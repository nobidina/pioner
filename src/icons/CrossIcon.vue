<template>
  <svg class="cross-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="26.9706"
      y="10"
      width="4"
      height="24"
      transform="rotate(45 26.9706 10)"
      :fill='color'
    />
    <rect
      x="10"
      y="12.8281"
      width="4"
      height="24"
      transform="rotate(-45 10 12.8281)"
      :fill='color'
    />
  </svg>
</template>

<script>
export default {
  name: 'CrossIcon',
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

  .cross-icon {
    width: 40px;
    height: 40px;
  }
</style>
