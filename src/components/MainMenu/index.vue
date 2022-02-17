<template>
  <div class="main-menu">
    <icon-button :variant='"burger"' :color="iconColor"/>
  </div>
</template>

<script>

import IconButton from '@/components/IconButton.vue';
import colors from '../../helpers/colors';

export default {
  name: 'MainMenu',
  components: {
    IconButton,
  },
  props: {},
  data: () => ({
    iconColor: colors.icons.menu,
  }),
};
</script>

<style scoped lang="less">
  @import "../../less/variables.less";

  .main-menu {
  }
</style>
