<template>
  <div class="page-header">
    <container class="page-header__inner">
      <logo :color="logoColor"/>
      <div class="page-header__left-part">
        <search class="page-header__search" />
        <main-menu />
      </div>
    </container>
  </div>
</template>

<script>
import Container from '@/components/Container.vue';
import Logo from '@/components/Logo.vue';
import MainMenu from '@/components/MainMenu/index.vue';
import Search from '@/components/Search/index.vue';

export default {
  name: 'PageHeader',
  components: {
    Container,
    Logo,
    MainMenu,
    Search,
  },
  data: () => ({
    logoColor: '#000000',
  }),
};
</script>

<style scoped lang="less">
@import "../../less/variables.less";

  .page-header {
    @media @desktop {
      border-top: 20px solid @border-primary;
    }

    &__inner {
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
