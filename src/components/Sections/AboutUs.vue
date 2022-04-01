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
    <Flicking v-if="!isDesktop" class="about-us__swiper" :options="{ circular: true, bound: true }">
      <div
        class="about-us__item"
        v-for="item in gallery"
        :key="item.id"
      >
        <img
          class="about-us__img"
          :src="item.src"
          :srcSet="item.srcSet"
          :alt="item.alt"
        />
      </div>
    </Flicking>
    <Swiper v-else :shift-width="663" :slides="5" :shift="slidePosition" @swipe="moveSlides">
      <div
        class="about-us__item"
        v-for="item in gallery"
        :key="item.id"
      >
        <img
          class="about-us__img"
          :src="item.srcDesktop"
          :srcSet="item.srcSetDesktop"
          :alt="item.alt"
        />
      </div>
    </Swiper>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue';
import { Flicking } from '@egjs/vue-flicking';
import { mapState } from 'vuex';

export default {
  name: 'AboutUs',
  components: {
    Flicking,
    Swiper,
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
    slidePosition: 0,
  }),
  computed: {
    ...mapState({
      isDesktop: (state) => state.isDesktop,
    }),
  },
  methods: {
    moveSlides(shift) {
      this.slidePosition = shift;
    },
  },
};
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .about-us {
    margin-bottom: 100px;

    @media @desktop {
      margin-bottom: 192px;
    }

    &__inner {
      box-sizing: border-box;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;

      @media @desktop {
        .container();
      }
    }
    &__item {
      margin-right: 16px;

      @media @desktop {
        margin-right: 32px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
    &__img {
      display: block;
      width: 327px;
      height: 240px;

      @media @desktop {
        width: 631px;
        height: 355px;
      }
    }
    &__title {
      margin-bottom: 28px;
      .h3();

      @media @desktop {
        margin-bottom: 48px;
      }
    }
    &__text {
      margin-bottom: 32px;
      .p();

      @media @desktop {
        width: 748px;
      }
    }
  }
</style>
