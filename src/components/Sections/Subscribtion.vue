<template>
  <div class="subscribtion">
    <div class="subscribtion__inner">
      <div class="subscribtion__title-wrapper" @click="switchFocus">
        <h4 class="subscribtion__title">
          Хотите быть в курсе событий, подписывайтесь на&nbsp;нашу&nbsp;рассылку.
        </h4>
        <button v-if="isDesktop" class="subscribtion__btn-arrow">
          <svg width="30" height="70" viewBox="0 0 30 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!--eslint-disable-next-line max-len-->
            <path d="M13.5858 69.4142C14.3668 70.1953 15.6332 70.1953 16.4142 69.4142L29.1421 56.6863C29.9232 55.9052 29.9232 54.6389 29.1421 53.8579C28.3611 53.0768 27.0948 53.0768 26.3137 53.8579L15 65.1716L3.68629 53.8579C2.90524 53.0768 1.63891 53.0768 0.857864 53.8579C0.0768156 54.6389 0.0768156 55.9052 0.857864 56.6863L13.5858 69.4142ZM13 0L13 68H17L17 0L13 0Z" fill="black"/>
          </svg>
        </button>
      </div>
      <CustomInput
        ref="input"
        class="subscribtion__input"
        :is-focus="isFocus"
        :option="'lg'"
        :placeholder="'email@gmail.com'"
      />
      <Btn :text="'Подписаться'" :option="'lg'"/>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue';
import CustomInput from '@/components/CustomInput.vue';
import { mapState } from 'vuex';

export default {
  name: 'Subscribtion',
  components: {
    Btn,
    CustomInput,
  },
  props: {
  },
  data: () => ({
    isFocus: false,
  }),
  computed: {
    ...mapState({
      isDesktop: (state) => state.isDesktop,
    }),
  },
  methods: {
    switchFocus() {
      const scroll = document.documentElement.scrollTop;
      window.scrollTo(0, scroll + 150);
      this.isFocus = !this.isFocus;
    },
  },
};
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .subscribtion {
    box-sizing: border-box;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 100px;

    @media @desktop {
      .container();
      margin-bottom: 192px;
    }

    &__inner {
      @media @desktop {
        padding-right: 190px;
      }
    }

    &__title-wrapper {
      display: flex;
      margin-bottom: 36px;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      &:hover .subscribtion__btn-arrow svg path{
        @media @desktop {
          fill: #226CA3;
        }
      }

      &:hover .subscribtion__title{
        @media @desktop {
          color: #226CA3;
        }
      }

      &:active .subscribtion__btn-arrow svg path{
        @media @desktop {
          fill: #59ABE8;
        }
      }

      &:active .subscribtion__title{
        @media @desktop {
          color: #59ABE8;
        }
      }
    }

    &__title {
      .h4();
    }

    &__btn-arrow {
      padding-right: 7px;
      padding-left: 7px;
    }

    &__input {
      margin-bottom: 24px;

      @media @desktop {
        margin-bottom: 32px;
      }
    }
  }
</style>
