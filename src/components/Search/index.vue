<template>
  <div class="search">
    <icon-button :variant='"search"' :color="iconColor" @click='openPopUp()'/>
    <pop-up v-if='isPopUp' @close='closePopUp()'>
      search-field
    </pop-up>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue';
import PopUp from '@/components/PopUp.vue';
import colors from '../../helpers/colors';

export default {
  name: 'Search',
  components: {
    IconButton,
    PopUp,
  },
  data: () => ({
    iconColor: colors.icons.search,
    isPopUp: false,
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

  .search {

  }
</style>
