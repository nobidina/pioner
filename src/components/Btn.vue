<template>
  <button class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    padding: 12px 24px;
    background-color: @bg-accent;
    font-family: @color-primary;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: @color-primary-reverse;
  }
</style>
