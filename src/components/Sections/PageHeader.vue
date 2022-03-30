<template>
  <div class="page-header">
    <div class="page-header__inner">
      <logo :option="'mini'" :color="logoColor"/>
      <div class="page-header__left-part">
        <search class="page-header__search" />
        <main-menu
          :menu="menu"
          :region="region"
          :phone="phone"
          @pick="emitPick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import MainMenu from '@/components/main-menu/MainMenu.vue';
import Search from '@/components/search/Search.vue';

export default {
  name: 'PageHeader',
  components: {
    Logo,
    MainMenu,
    Search,
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    logoColor: '#000000',
  }),
  methods: {
    emitPick(value) {
      this.$emit('pick', value);
    },
  },
};
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .page-header {
    @media @desktop {
      border-top: 20px solid @border-primary;
    }

    &__inner {
      .container();
      display: flex;
      justify-content: space-between;
      padding-top: 32px;
    }

    &__left-part {
      display: flex;
      margin-left: 24px;
    }

    &__search {
      margin-right: 24px;
    }
  }
</style>
