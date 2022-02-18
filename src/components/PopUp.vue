<template>
  <div class="pop-up">
    <icon-button
      class="pop-up__button"
      :variant='"cross"'
      :color="iconColor"
      @click="$emit('close')"
    />
    <slot />
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
    padding-top: 92px;
    background-color: @bg-primary;

    &__button {
      position: absolute;
      top: 32px;
      right: 24px;
    }
  }
</style>
