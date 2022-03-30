<template>
  <div class="custom-input">
    <input
      class="custom-input__input"
      :class="{'custom-input__input--small': option === 'small'}"
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
      // small
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
      padding: 20px 24px;
      font-size: 18px;
      color: @color-primary;
      border: 4px solid @border-primary;

      &:focus {
        border-color: @border-focus;
      }

      &--small {
        min-height: 47px;
        padding: 12px 20px;
      }
    }
  }
</style>
