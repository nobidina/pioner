<template>
  <div class="new-products">
    <div class="new-products__inner">
      <h3 class="new-products__title">
        Новинки
      </h3>
    </div>
    <div class="new-products__cards">
      <Card
        class="new-products__card"
        v-for="item in products"
        :key="item.id"
        :option="'mini'"
        :product="item"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { newProducts } from '../../imgs/data';

export default {
  name: 'NewProducts',
  components: {
    Card,
  },
  props: {
  },
  data: () => ({
    products: [
      {
        id: 1,
        title: 'Электромагнитные расходомеры-счетчики',
        src: newProducts[0].src,
        srcSet: newProducts[0].srcSet,
      },
      {
        id: 2,
        title: 'Манометры цифровые эталонные',
        src: newProducts[1].src,
        srcSet: newProducts[1].srcSet,
      },
      {
        id: 3,
        title: 'Электромагнитные расходомеры-счетчики',
        src: newProducts[2].src,
        srcSet: newProducts[2].srcSet,
      },
      {
        id: 4,
        title: 'Штуцер передвижной',
        src: newProducts[0].src,
        srcSet: newProducts[0].srcSet,
      },
      {
        id: 5,
        title: 'Электромагнитные расходомеры-счетчики',
        src: newProducts[1].src,
        srcSet: newProducts[1].srcSet,
      },
    ],
  }),
  methods: {
  },
};
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .new-products {
    margin-bottom: 100px;
    &__inner {
      box-sizing: border-box;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
    }
    &__cards {
      display: flex;
      padding-right: 24px;
      padding-left: 24px;
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
