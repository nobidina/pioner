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
    <div v-else class="swiper">
      <div class="swiper__controls">
        <button class="swiper__btn">
          <svg width="62" height="30" viewBox="0 0 62 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!--eslint-disable-next-line max-len-->
          <path d="M0.585789 13.5858C-0.195259 14.3668 -0.195259 15.6332 0.585789 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585789 13.5858ZM62 13L2 13V17L62 17V13Z" fill="black"/>
          </svg>
        </button>
        <button class="swiper__btn">
          <svg width="62" height="30" viewBox="0 0 62 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!--eslint-disable-next-line max-len-->
            <path d="M61.4142 16.4142C62.1953 15.6332 62.1953 14.3668 61.4142 13.5858L48.6863 0.857864C47.9052 0.0768156 46.6389 0.0768156 45.8579 0.857864C45.0768 1.63891 45.0768 2.90524 45.8579 3.68629L57.1716 15L45.8579 26.3137C45.0768 27.0948 45.0768 28.3611 45.8579 29.1421C46.6389 29.9232 47.9052 29.9232 48.6863 29.1421L61.4142 16.4142ZM0 17H60V13H0V17Z" fill="black"/>
          </svg>
        </button>
      </div>
      <div class="swiper__inner">
        <Card
          class="swiper__slide  new-products__card"
          v-for="item in products"
          :key="item.id"
          :option="'sm'"
          :product="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking';
import Card from '@/components/Card.vue';
import { mapState } from 'vuex';

export default {
  name: 'NewProducts',
  components: {
    Flicking,
    Card,
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
  }),
  computed: {
    ...mapState({
      isDesktop: (state) => state.isDesktop,
    }),
  },
  methods: {
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
    &__card {
      margin-right: 16px;

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

  .swiper {
    overflow: hidden;
    &__controls {
      .container();
      display: flex;
      justify-content: flex-end;
      margin-bottom: 48px;
    }

    &__btn {
      margin-right: 32px;
      padding-top: 7px;
      padding-bottom: 7px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__inner {
      display: flex;
      justify-content: center;
    }
  }
</style>
