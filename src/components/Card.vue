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
    <img class="card__img" :src="product.src" :srcSet="product.srcSet" alt=""/>
  </div>
</template>

<script>
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
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    overflow: hidden;

    &--sm {
      box-sizing: border-box;
      max-width: 327px;
      min-width: 327px;
      padding: 32px;
      border: 4px solid @border-primary;

      .card__title {
        width: 100%;
        min-height: 64px;
        margin-bottom: 24px;
        font-family: @font-primary;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: @color-primary;
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
      }

      .card__img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
</style>
