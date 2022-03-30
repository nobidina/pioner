<template>
  <div class="products">
    <div class="products__inner">
      <h3 class="products__title">
        {{ title }}
      </h3>
    </div>
    <Flicking class="products__swiper" :options="{ circular: true, bound: true }">
      <Card
        v-for="item in products"
        :key="item.id"
        class="products__card"
        :option="'md'"
        :product="item"
      />
    </Flicking>
    <div class="products__inner">
      <Btn :text="'Перейти в каталог'" />
    </div>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking';
import Btn from '@/components/Btn.vue';
import Card from '@/components/Card.vue';

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
  methods: {
  },
};
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .products {
    margin-bottom: 100px;
    &__inner {
      box-sizing: border-box;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
    }
    &__swiper {
      margin-bottom: 36px;
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
    }
  }
</style>
