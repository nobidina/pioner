<template>
  <div class="subscribtion">
    <div class="subscribtion__inner">
      <h4 class="subscribtion__title">
        Хотите быть в курсе событий, подписывайтесь на&nbsp;нашу&nbsp;рассылку.
      </h4>
      <CustomInput class="subscribtion__input" :placeholder="'email@gmail.com'" />
      <Btn :text="'Подписаться'"/>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue';
import CustomInput from '@/components/CustomInput.vue';

export default {
  name: 'Subscribtion',
  components: {
    Btn,
    CustomInput,
  },
  props: {
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

  .subscribtion {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 100px;
    padding-top: 32px;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 100px;

    &__title {
      .h4();
      margin-bottom: 36px;
    }

    &__input {
      margin-bottom: 24px;
    }
  }
</style>
