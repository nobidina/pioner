<template>
  <div class="custom-input">
    <input
      class="custom-input__input"
      :class="[
        {'custom-input__input--sm': option === 'sm'},
        {'custom-input__input--lg': option === 'lg'}
      ]"
      :placeholder="placeholder"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>

export default {
  name: 'CustomInput',
  components: {
  },
  data: () => ({
    value: '',
  }),
  props: {
    option: {
      // sm, lg
      type: String,
      required: false,
      default: 'default',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .custom-input {
    &__input {
      box-sizing: border-box;
      display: block;
      width: 100%;
      min-height: 63px;
      padding: 16px 24px;
      font-size: 18px;
      color: @color-primary;
      border: 4px solid @border-primary;
      -webkit-appearance: none;
      -webkit-border-radius:0;
      border-radius:0;

      &:focus {
        border-color: @border-focus;
      }

      &--sm {
        min-height: 47px;
        padding: 12px 20px;
      }

      &--lg {
        @media @desktop {
          min-height: 80px;
          padding: 24px;
          font-size: 24px;
        }
      }
    }
  }
</style>
