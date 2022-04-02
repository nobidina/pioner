<template>
  <div class="new-products">
    <div class="new-products__inner">
      <h3 class="new-products__title">
        {{ title }}
      </h3>
      <p class="new-products__text">
        {{ text }}
      </p>
    </div>
    <Flicking v-if="!isDesktop" :options="{ circular: true, bound: true }">
      <Card
        class="new-products__card"
        v-for="item in products"
        :key="item.id"
        :option="'sm'"
        :product="item"
      />
    </Flicking>
    <Swiper
      v-else
      class="new-products__swiper"
      :shift-width="380"
      :slides="5"
      :shift="slidePosition"
      @swipe="moveSlides"
    >
      <Card
        class="swiper__slide  new-products__card"
        v-for="item in products"
        :key="item.id"
        :option="'sm'"
        :product="item"
      />
    </Swiper>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking';
import Card from '@/components/Card.vue';
import Swiper from '@/components/Swiper.vue';
import { mapState } from 'vuex';

export default {
  name: 'NewProducts',
  components: {
    Flicking,
    Card,
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
    products: {
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

<style lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .new-products {
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
    &__swiper {
      @media @desktop {
        padding-bottom: 4px;
      }
    }
    &__card {
      margin-right: 16px;

      @media @desktop {
        margin-right: 32px;
      }

      &:last-child {
        margin-right: 0;
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
        width: 633px;
        margin-bottom: 0;
      }
    }
  }

  .flicking-viewport {
    box-sizing: border-box;
    padding: 0 24px;
  }

  .flicking-camera {
    display: flex;
  }
</style>
