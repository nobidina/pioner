<template>
  <ul class="list">
    <li class="list__item" v-for="item in menu" :key="item.id">
      <a class="list__link" :href="item.href">
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
  @import "../../less/variables.less";

  .list {
    display: flex;
    flex-direction: column;
    border-top: 1px solid @border-secondary;

    &__item {
      border-bottom: 1px solid @border-secondary;
    }

    &__link {
      display: block;
      padding: 20px 24px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: @color-primary;
      background-color: @bg-primary;
    }
  }
</style>
