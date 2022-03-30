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
    <Flicking :options="{ circular: true, bound: true }">
      <Card
        class="new-products__card"
        v-for="item in products"
        :key="item.id"
        :option="'sm'"
        :product="item"
      />
    </Flicking>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking';
import Card from '@/components/Card.vue';

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
  methods: {
  },
};
</script>

<style lang="less">
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
    &__text {
      margin-bottom: 32px;
      .p();
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
