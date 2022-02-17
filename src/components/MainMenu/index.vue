<template>
  <div class="main-menu">
    <icon-button :variant='"burger"' :color="iconColor" @click='openPopUp()'/>
    <pop-up v-if='isPopUp' @close='closePopUp()'>
      menu,
      phone,
      region,
    </pop-up>
  </div>
</template>

<script>

import IconButton from '@/components/IconButton.vue';
import PopUp from '@/components/PopUp.vue';
import colors from '../../helpers/colors';

export default {
  name: 'MainMenu',
  components: {
    IconButton,
    PopUp,
  },
  props: {},
  data: () => ({
    isPopUp: false,
    iconColor: colors.icons.menu,
  }),
  methods: {
    openPopUp() {
      this.isPopUp = true;
    },
    closePopUp() {
      this.isPopUp = false;
    },
  },
};
</script>

<style scoped lang="less">
  @import "../../less/variables.less";

  .main-menu {
  }
</style>
