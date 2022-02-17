<template>
  <div id="app">
    <PageHeader />
  </div>
</template>

<script>
import PageHeader from './components/Sections/PageHeader.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
  },
};
</script>

<style lang="less">
@import "less/reset.less";
@import "less/variables.less";

#app {
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: @font-primary;
  font-size: 18px;
  line-height: 130%;
  color: @color-primary;
  background-color: @bg-primary;
}
</style>
