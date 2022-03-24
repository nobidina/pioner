<template>
  <div id="app">
    <PageHeader :menu="menu" :phone="phone" :region="region" @pick="changeRegion"/>
    <Hero />
    <NewProducts />
    <Products />
    <AboutUs />
    <News />
    <Subscribtion />
    <PageFooter />
  </div>
</template>

<script>
import AboutUs from './components/sections/AboutUs.vue';
import Hero from './components/sections/Hero.vue';
import NewProducts from './components/sections/NewProducts.vue';
import News from './components/sections/News.vue';
import PageFooter from './components/sections/PageFooter.vue';
import PageHeader from './components/sections/PageHeader.vue';
import Products from './components/sections/Products.vue';
import Subscribtion from './components/sections/Subscribtion.vue';

export default {
  name: 'App',
  components: {
    AboutUs,
    Hero,
    NewProducts,
    News,
    PageFooter,
    PageHeader,
    Products,
    Subscribtion,
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
  methods: {
    changeRegion(value) {
      this.region = value;
    },
  },
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
