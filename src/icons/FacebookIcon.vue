<template>
  <svg class="facebook-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- eslint-disable max-len -->
    <path d="M20 5C11.73 5 5 11.73 5 20C5 28.27 11.73 35 20 35C28.27 35 35 28.27 35 20C35 11.73 28.27 5 20 5ZM20 7.5C26.9188 7.5 32.5 13.0813 32.5 20C32.503 22.9925 31.43 25.8862 29.4767 28.1532C27.5234 30.4203 24.82 31.9093 21.86 32.3487V23.645H25.42L25.9788 20.0288H21.86V18.0538C21.86 16.5538 22.3538 15.22 23.7575 15.22H26.0138V12.065C25.6175 12.0113 24.7787 11.895 23.1938 11.895C19.8837 11.895 17.9437 13.6425 17.9437 17.625V20.0288H14.5413V23.645H17.9437V32.3175C15.0247 31.8371 12.3715 30.3344 10.4584 28.0779C8.54518 25.8215 7.49661 22.9583 7.5 20C7.5 13.0813 13.0813 7.5 20 7.5Z"
    :fill="color"/>
  </svg>
</template>

<script>
export default {
  name: 'FacebookIcon',
  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .facebook-icon {
    width: 40px;
    height: 40px;

    &:hover path {
      @media @desktop {
        fill: @hover-color;
      }
    }

    &:active path {
      @media @desktop {
        fill: @active-color;
      }
    }
  }
</style>
