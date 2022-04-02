<template>
  <button
    class="btn"
    :class="[
      {'btn--sm': option === 'sm'},
      {'btn--lg': option === 'lg'},
    ]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    option: {
      // sm, lg
      type: String,
      required: true,
    },
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
    width: 100%;
    padding: 12px 24px;
    background-color: @bg-accent;
    font-family: @font-primary;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: @color-primary-reverse;

    @media @desktop {
      transition:  0.2s transform, 0.2s box-shadow;
      transform: translate(0);
      box-shadow: 4px 4px 0px @shadow-color;
    }

    &:hover {
      @media @desktop {
        transform: translate(-4px, -4px);
        box-shadow: 8px 8px 0px @hover-shadow-color;
      }
    }

    &:active {
      @media @desktop {
        transform: translate(4px, 4px);
        box-shadow: 0px 0px 0px @hover-shadow-color;
      }
    }

    &--sm {
      @media @desktop {
        width: 248px;
        font-size: 24px;
        padding: 10px 28px;
      }
    }

    &--lg {
      @media @desktop {
        width: 100%;
        font-size: 24px;
        padding: 22px 28px;
      }
    }
  }
</style>
