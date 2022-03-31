<template>
  <div class="products">
    <div class="products__inner">
      <h3 class="products__title">
        {{ title }}
      </h3>
      <Flicking
        v-if="!isDesktop"
        class="products__swiper"
        :options="{ circular: true, bound: true }"
      >
        <Card
          v-for="item in products"
          :key="item.id"
          class="products__card"
          :option="'md'"
          :product="item"
        />
      </Flicking>
      <div v-else class="products__cards">
        <Card
          v-for="item in products"
          :key="item.id"
          class="products__card"
          :class="{'products__card--lg': item.isMain}"
          :option="item.isMain ? 'lg' : 'md'"
          :product="item"
        />
      </div>
    </div>
    <div class="products__btn-wrapper">
      <Btn class="products__btn" :option="'lg'" :text="'Перейти в каталог'" />
    </div>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking';
import Btn from '@/components/Btn.vue';
import Card from '@/components/Card.vue';
import { mapState } from 'vuex';

export default {
  name: 'Products',
  components: {
    Flicking,
    Btn,
    Card,
  },
  props: {
    title: {
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

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .products {
    margin-bottom: 100px;

    @media @desktop {
      margin-bottom: 192px;
    }

    &__inner {
      @media @desktop {
        position: relative;
        .container();
      }
    }
    &__swiper {
      margin-bottom: 36px;
    }
    &__cards {
      @media @desktop {
        display: flex;
        flex-wrap: wrap;
        margin-right: 190px;
        margin-bottom: 36px;
      }
    }
    &__card {
      margin-right: 16px;

      @media @desktop {
        margin-right: 32px;
      }

      &--lg {
        @media @desktop {
          margin-right: 0;
          margin-bottom: 32px;
        }
      }

      &:last-child {
        margin-right: 0;
        @media @desktop {
          margin-right: 0;
        }
      }
    }
    &__title {
      box-sizing: border-box;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
      margin-bottom: 28px;
      .h3--vertical();

      @media @desktop {
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
        padding-left: 0;
        padding-right: 0;
        margin-bottom: 0;
      }
    }
    &__btn-wrapper {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;

      @media @desktop {
        width: 1108px;
        padding-left: 0;
        margin-left: auto;
        margin-right: auto;
        padding-right: 190px;
      }
    }
  }
</style>
