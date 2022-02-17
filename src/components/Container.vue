<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .container {
    box-sizing: border-box;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;

    @media @desktop {
      width: 1108px;
      padding-left: 0;
      padding-right: 0;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
