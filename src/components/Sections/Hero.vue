<template>
  <div class="hero">
    <div class="hero__inner">
      <div class="hero__text-block">
        <h1 class="hero__title">
          {{ title }}
        </h1>
        <div class="hero__right-part">
          <h2 class="hero__subtitle">
            {{ subtitle }}
          </h2>
          <p class="hero__text">
            {{ text }}
          </p>
        </div>
      </div>
      <img
        class="hero__main-img"
        :src="mainImg.src"
        :srcSet="mainImg.srcSet"
        :alt="mainImg.alt"
      />
      <Btn :text="'Заказать звонок'" />
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue';

export default {
  name: 'Hero',
  components: {
    Btn,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    mainImg: {
      type: Object,
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
