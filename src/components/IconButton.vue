<template>
  <button class="icon-button">
    <component :is='icon' :color='color' />
  </button>
</template>

<script>
import SearchIcon from '@/icons/SearchIcon.vue';
import BurgerIcon from '@/icons/BurgerIcon.vue';

export default {
  name: 'IconButton',
  props: {
    variant: {
      // search, burger
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    icon: null,
  }),

  created() {
    switch (this.variant) {
      case 'search':
        this.icon = SearchIcon;
        break;
      case 'burger':
        this.icon = BurgerIcon;
        break;
      default:
        this.icon = null;
    }
  },
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .search-button {
    width: 40px;
    height: 40px;
  }
</style>
