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

    @media @desktop {
      flex-direction: row;
      justify-content: center;
      border-top: none;
    }

    &__item {
      border-bottom: 1px solid @border-secondary;

      @media @desktop {
        border-bottom: none;
        margin-right: 14px;
        margin-left: 14px;
      }

      &:first-child {
        @media @desktop {
          margin-right: 0;
        }
      }

      &:last-child {
        @media @desktop {
          border-bottom: none;
          margin-right: 0;
        }
      }
    }

    &__link {
      display: block;
      padding: 24px;
      font-size: 20px;
      line-height: 32px;
      font-weight: 400;
      color: @color-primary;
      background-color: @bg-primary;

      @media @desktop {
        padding: 4px 8px;
      }

      &:hover {
        @media @desktop {
          color: #226CA3;
        }
      }

      &:active {
        @media @desktop {
          color: #0C548A;
        }
      }
    }
  }
</style>
