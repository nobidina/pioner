<template>
  <div class="tip-button" @click="$emit('click')">
    <icon-button class="tip-button__button" :variant="variant" :color="color" />
    <p class="tip-button__tip">
      {{ tip }}
    </p>
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
    align-items: center;

    &__button {
      margin-right: 24px;
    }

    &__tip {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      color: @color-primary;
    }
  }
</style>
