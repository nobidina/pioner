<template>
  <div class="tip-button" @click="$emit('click')">
    <template v-if="variant === 'phone'">
      <icon-button class="tip-button__icon" :variant="variant" :color="color" />
      <a class="tip-button__tip" :href="'tel:' + tip">
        {{ tip }}
      </a>
    </template>
    <template v-else>
      <icon-button class="tip-button__icon" :variant="variant" :color="color" />
      <p class="tip-button__tip">
        {{ tip }}
      </p>
    </template>
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

    &:hover .tip-button__tip {
      @media @desktop {
        width: 154px;
      }
    }

    &__icon {
      margin-right: 24px;

      @media @desktop {
        margin-right: 8px;
      }
    }

    &__tip {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      color: @color-primary;

      @media @desktop {
        transition: width 0.3s;
        width: 0;
        max-width: 154px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
