<template>
  <div class="pop-up">
    <div class="pop-up__inner">
      <icon-button
        class="pop-up__button"
        :variant='"cross"'
        :color="iconColor"
        @click="$emit('close')"
      />
      <slot />
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue';
import colors from '@/helpers/colors';

export default {
  name: 'PopUp',
  components: {
    IconButton,
  },
  data: () => ({
    iconColor: colors.icons.cross,
  }),
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .pop-up {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10000000;

    @media @desktop {
      background: rgba(163, 163, 163, 0.9);
    }

    &__inner {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      padding-top: 92px;
      background-color: @bg-primary;

      @media @desktop {
        top: 50%;
        left: 50%;
        right: auto;
        bottom: auto;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        width: 918px;
        height: 80vh;
        padding: 40px;
        border: 4px solid #000000;
        box-shadow: 0 0 0 #226CA3;
        transition: transform 0.3s, box-shadow 0.3s;
        &:hover {
          transform: translate(calc(-50% - 16px), calc(-50% - 16px));
          box-shadow: 16px 16px 0 #226CA3;
        }
      }
    }

    &__button {
      position: absolute;
      top: 32px;
      right: 24px;
    }
  }
</style>
