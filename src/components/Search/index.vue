<template>
  <div class="search">
    <icon-button :variant='"search"' :color="iconColor"/>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue';
import colors from '../../helpers/colors';

export default {
  name: 'Search',
  components: {
    IconButton,
  },
  data: () => ({
    iconColor: colors.icons.search,
  }),
  props: {},
};
</script>

<style scoped lang="less">
  @import "../../less/variables.less";

  .search {

  }
</style>
