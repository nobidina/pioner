<template>
  <div class="hero">
    <div class="hero__inner">
      <div class="hero__text-block">
        <h1 class="hero__title">
          {{ title }}
        </h1>
        <div class="hero__text-block-inner">
          <h2 class="hero__subtitle">
            {{ subtitle }}
          </h2>
          <p class="hero__text">
            {{ text }}
          </p>
        </div>
      </div>
      <div class="hero__imgs-wrapper">
        <div class="hero__left">
          <img
            class="hero__main-img"
            :src="mainImg.src"
            :srcSet="mainImg.srcSet"
            :alt="mainImg.alt"
          />
          <Btn class="hero__btn" :text="'Заказать звонок'" :option="'sm'" />
        </div>
        <div v-if="isDesktop" class="hero__right">
          <img
            class="hero__img"
            :src="img.src"
            :srcSet="img.srcSet"
            :alt="img.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue';
import { mapState } from 'vuex';

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
    img: {
      type: Object,
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

  .hero {
    @media @desktop {
      margin-bottom: 192px;
      overflow: hidden;
    }
    &__inner {
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 100px;
      padding-top: 32px;
      padding-left: 24px;
      padding-right: 24px;

      @media @desktop {
        position: relative;
        .container();
      }
    }
    &__text-block {
      display: flex;
      justify-content: space-between;
      margin-bottom: 36px;
      @media @desktop {
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        margin-bottom: 40px;
      }
    }
    &__text-block-inner {
      display: flex;
      flex-direction: column;

      @media @desktop {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        margin-left: 162px;
      }
    }
    &__title {
      .h1();
      margin-right: 32px;

      @media @desktop {
        position: absolute;
      }
    }
    &__subtitle {
      .h2();
      margin-bottom: 32px;

      @media @desktop {
        margin-bottom: 0;
      }
    }
    &__text {
      font-family: @font-primary;
      font-weight: 400;
      font-size: 18px;
      line-height: 130%;
      color: @color-primary;

      @media @desktop {
        width: 532px;
        font-size: 24px;
        line-height: 130%;
      }
    }
    &__imgs-wrapper {
      @media @desktop {
        display: flex;
        margin-left: 132px;
        padding-left: 60px;
      }
    }
    &__left {
      @media @desktop {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 128px;
      }
    }
    &__main-img {
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 36px;

      @media @desktop {
        order: 1;
        width: 632px;
        height: auto;
        margin-bottom: 0;
      }
    }
    &__img {
      @media @desktop {
        width: 328px;
        height: auto;
      }
    }
    &__btn {
      @media @desktop {
        order: 0;
        margin-bottom: 120px;
      }
    }
  }
</style>
