<template>
  <svg class="phone-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- eslint-disable max-len -->
    <path
      d="M17.59 10.4004L11.9517 3.89204C11.3017 3.14204 10.11 3.14538 9.355 3.90204L4.71833 8.54704C3.33833 9.92871 2.94333 11.9804 3.74167 13.6254C8.51103 23.5003 16.4751 31.4755 26.3433 36.2587C27.9867 37.057 30.0367 36.662 31.4167 35.2804L36.0967 30.592C36.855 29.8337 36.8567 28.6354 36.1 27.9854L29.5667 22.377C28.8833 21.7904 27.8217 21.867 27.1367 22.5537L24.8633 24.8304C24.7469 24.9523 24.5937 25.0328 24.4273 25.0592C24.2608 25.0857 24.0902 25.0569 23.9417 24.977C20.2257 22.8372 17.1433 19.7508 15.0083 16.032C14.9284 15.8833 14.8994 15.7124 14.9259 15.5456C14.9524 15.3788 15.0329 15.2254 15.155 15.1087L17.4217 12.8404C18.1083 12.1504 18.1833 11.0837 17.59 10.3987V10.4004Z"
      :stroke="color"
      stroke-width="3.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'PhoneIcon',
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

  .phone-icon {
    width: 40px;
    height: 40px;
  }
</style>
