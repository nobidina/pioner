<template>
  <div id="app">
    <PageHeader :menu="menu" :phone="region.phone" :region="region.name" @pick="changeRegion"/>
    <Hero
      :title="hero.title"
      :subtitle="hero.subtitle"
      :text="hero.text"
      :main-img="hero.mainImg"
      :img="hero.img"
    />
    <NewProducts
      :title="newProducts.title"
      :text="newProducts.text"
      :products="newProducts.products"
    />
    <Products
      :title="products.title"
      :products="products.products"
    />
    <AboutUs
      :title="aboutUs.title"
      :text="aboutUs.text"
      :gallery="aboutUs.gallery"
    />
    <News
      :title="news.title"
      :news="news.news"
    />
    <Subscribtion />
    <PageFooter
      :socialMediaList="socialMediaList"
      :region="region"
      :footerMenu="footerMenu"
    />
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
import {
  heroData, newProductsData, productsData, aboutUsData, newsData, socialMediaData,
} from './data/index';

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
    region: {
      name: 'Свердловск',
      phone: '8(800)120-52-50',
      schedule: 'ПН-ПТ – 9:00-17:00',
      email: 'pionerrr@sila.ru',
    },
    footerMenu: [
      [
        {
          id: '1',
          text: 'Продукция',
          href: '#',
        },
        {
          id: '2',
          text: 'Услуги',
          href: '#',
        },
        {
          id: '3',
          text: 'Каталоги',
          href: '#',
        },
      ],
      [
        {
          id: '4',
          text: 'Регионы',
          href: '#',
        },
        {
          id: '5',
          text: 'Файлы',
          href: '#',
        },
        {
          id: '6',
          text: 'Поддержка',
          href: '#',
        },
      ],
      [
        {
          id: '7',
          text: 'О нас',
          href: '#',
        },
        {
          id: '8',
          text: 'Новости',
          href: '#',
        },
        {
          id: '9',
          text: 'Контакты',
          href: '#',
        },
      ],
    ],
    hero: heroData,
    newProducts: newProductsData,
    products: productsData,
    aboutUs: aboutUsData,
    news: newsData,
    socialMediaList: socialMediaData,
  }),
  methods: {
    changeRegion(value) {
      this.region.name = value;
    },
  },
};
</script>

<style lang="less">
@import "less/reset.less";
@import "less/variables.less";

html {
  scroll-behavior: smooth;
}

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
