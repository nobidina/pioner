<template>
  <div id="app">
    <PageHeader :menu="menu" :phone="phone" :region="region" />
  </div>
</template>

<script>
import PageHeader from './components/sections/PageHeader.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
  },
  data: () => ({
    menu: [
      {
        id: '1',
        text: 'О нас',
        href: '#',
      },
      {
        id: '2',
        text: 'Продукция',
        href: '#',
      },
      {
        id: '3',
        text: 'Услуги',
        href: '#',
      },
      {
        id: '4',
        text: 'Контакты',
        href: '#',
      },
    ],
    region: 'Свердловск',
    phone: '8(800)120-52-50',
  }),
};
</script>

<style lang="less">
@import "less/reset.less";
@import "less/variables.less";

#app {
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: @font-primary;
  font-size: 18px;
  color: @color-primary;
  background-color: @bg-primary;
}
</style>
