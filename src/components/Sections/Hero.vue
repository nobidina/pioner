<template>
  <div class="hero">
    <div class="hero__inner">
      <div class="hero__text-block">
        <h1 class="hero__title">
          Пионер
        </h1>
        <div class="hero__right-part">
          <h2 class="hero__subtitle">
            Завод cиловых машин
          </h2>
          <p class="hero__text">
            28 лет в деле.
            Мы знаем, как&nbsp;автоматизировать технологические процессы вашего предприятия.
          </p>
        </div>
      </div>
      <img
        class="hero__main-img"
        :src="mainImg.src1x"
        :srcSet="mainImg.src2x"
        :alt="mainImg.alt"
      />
      <Btn :text="'Заказать звонок'" />
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue';
import { heroMain } from '../../imgs/data';

export default {
  name: 'Hero',
  components: {
    Btn,
  },
  props: {
  },
  data: () => ({
    mainImg: heroMain,
  }),
  methods: {
  },
};
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .hero {
    &__inner {
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 100px;
      padding-top: 32px;
      padding-left: 24px;
      padding-right: 24px;
    }
    &__text-block {
      display: flex;
      justify-content: space-between;
      margin-bottom: 36px;
    }
    &__title {
      .h1();
      margin-right: 32px;
    }
    &__right-part {
      display: flex;
      flex-direction: column;
    }
    &__subtitle {
      .h2();
      margin-bottom: 32px;
    }
    &__text {
      font-family: @font-primary;
      font-weight: 400;
      font-size: 18px;
      line-height: 130%;
      color: @color-primary;
    }
    &__main-img {
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 36px;
    }
  }
</style>
