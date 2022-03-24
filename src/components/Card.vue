<template>
  <div class="card" :class="{'card--mini': option === 'mini'}">
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
      // mini,
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

    &--mini {
      box-sizing: border-box;
      width: 327px;
      padding: 32px;
      border: 4px solid @border-primary;

      .card__title {
        margin-bottom: 24px;
        font-family: @font-primary;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: @color-primary;
      }

      .card__img {
        width: 200px;
        height: 140px;
      }
    }
  }
</style>
