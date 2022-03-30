<template>
  <div class="news">
    <div class="news__inner">
      <h3 class="news__title">
        {{ title }}
      </h3>
    </div>
    <Flicking class="news__swiper" :options="{ circular: true, bound: true }">
      <Card
        v-for="item in news"
        :key="item.id"
        class="news__card"
        :option="'md'"
        :product="item"
      />
    </Flicking>
    <div class="news__inner">
      <Btn :text="'Больше новостей'" />
    </div>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking';
import Btn from '@/components/Btn.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'News',
  components: {
    Btn,
    Card,
    Flicking,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    news: {
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

  .news {
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
