<template>
  <div
    class="card"
    :class="[
      {'card--sm': option === 'sm'},
      {'card--md': option === 'md'},
      {'card--lg': option === 'lg'}
    ]"
  >
    <h4 class="card__title">
      {{ product.title }}
    </h4>
    <img
      v-if="!isDesktop"
      class="card__img"
      :src="product.src"
      :srcSet="product.srcSet"
      alt=""
    />
    <img
      v-if="isDesktop"
      class="card__img"
      :src="product.srcDesktop"
      :srcSet="product.srcSetDesktop"
      alt=""
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Card',
  props: {
    option: {
      // sm, md, lg
      type: String,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      isDesktop: (state) => state.isDesktop,
    }),
  },
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    overflow: hidden;
    transform: translate(0);
    transition: transform 0.3s;

    &:hover {
      @media @desktop {
        transform: translate(-4px, -4px);
        border-color: @hover-color;
      }
    }

    &:active {
      @media @desktop {
        transform: translate(4px, 4px);
        border-color: @active-color;
      }
    }

    &--sm {
      box-sizing: border-box;
      max-width: 327px;
      min-width: 327px;
      padding: 32px;
      border: 4px solid @border-primary;

      @media @desktop {
        max-width: 348px;
        min-width: 348px;
      }

      &:hover .card__title{
        @media @desktop {
          color: @hover-color;
        }
      }

      &:active .card__title{
        @media @desktop {
          color: @active-color;
        }
      }

      .card__title {
        width: 100%;
        min-height: 64px;
        margin-bottom: 24px;
        font-family: @font-primary;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: @color-primary;

        @media @desktop {
          font-size: 24px;
          line-height: 32px;
        }
      }

      .card__img {
        display: block;
        width: 200px;
        height: 140px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    &--md {
      position: relative;
      justify-content: center;
      box-sizing: border-box;
      width: 327px;
      min-height: 440px;

      @media @desktop {
        width: 443px;
        height: 526px;
      }

      .card__title {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        width: 100%;
        padding: 24px;
        font-family: @font-primary;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: @color-primary-reverse;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

        @media @desktop {
          padding: 32px;
          font-size: 24px;
          line-height: 32px;
        }
      }

      .card__img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    &--lg {
      position: relative;
      justify-content: center;
      box-sizing: border-box;
      width: 918px;
      height: 566px;

      .card__title {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        width: 100%;
        padding: 24px;
        font-family: @font-primary;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: @color-primary-reverse;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

        @media @desktop {
          padding: 32px;
          font-size: 24px;
          line-height: 32px;
        }
      }

      .card__img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
</style>
