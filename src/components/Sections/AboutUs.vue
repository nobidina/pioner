<template>
  <div class="about-us">
    <div class="about-us__inner">
      <h3 class="about-us__title">
        {{ title }}
      </h3>
      <p class="about-us__text">
        {{ text }}
      </p>
    </div>
    <Flicking class="about-us__swiper" :options="{ circular: true }">
      <img
        class="about-us__item"
        v-for="item in gallery"
        :key="item.id"
        :src="item.src"
        :srcSet="item.srcSet"
        :alt="item.alt"
      />
    </Flicking>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking';

export default {
  name: 'AboutUs',
  components: {
    Flicking,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    gallery: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
  }),
  methods: {
  },
};
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .about-us {
    margin-bottom: 100px;
    &__inner {
      box-sizing: border-box;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
    }
    &__item {
      display: block;
      width: 327px;
      height: 240px;
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
    &__title {
      margin-bottom: 28px;
      .h3();
    }
    &__text {
      margin-bottom: 32px;
      .p();
    }
  }
</style>
