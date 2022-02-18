<template>
  <button class="icon-button" @click="$emit('click')">
    <component :is='icon' :color='color' />
  </button>
</template>

<script>
import BurgerIcon from '@/icons/BurgerIcon.vue';
import CrossIcon from '@/icons/CrossIcon.vue';
import MapIcon from '@/icons/MapIcon.vue';
import PhoneIcon from '@/icons/PhoneIcon.vue';
import SearchIcon from '@/icons/SearchIcon.vue';

export default {
  name: 'IconButton',
  props: {
    variant: {
      // search, burger, map, phone, cross
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
      case 'cross':
        this.icon = CrossIcon;
        break;
      case 'map':
        this.icon = MapIcon;
        break;
      case 'phone':
        this.icon = PhoneIcon;
        break;
      default:
        this.icon = null;
    }
  },
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .icon-button {
    width: 40px;
    height: 40px;
    font-size: 0;
    line-height: 0;
  }
</style>
