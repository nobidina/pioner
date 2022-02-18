<template>
  <div class="tip-button" @click="$emit('click')">
    <p class="tip-button__tip">
      {{ tip }}
    </p>
    <icon-button :variant="variant" :color="color" />
  </div>
</template>

<script>

import IconButton from '@/components/IconButton.vue';
import colors from '../helpers/colors';

export default {
  name: 'TipButton',
  components: {
    IconButton,
  },
  props: {
    variant: {
    // map, phone
      type: String,
      required: true,
    },
    tip: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    color: colors.icons.tipButton,
  }),
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .tip-button {
    display: flex;
    justify-content: end;
    align-items: end;

    &__tip {
      margin-right: 24px;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      color: @color-primary;
    }
  }
</style>
