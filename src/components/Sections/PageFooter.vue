<template>
  <div class="page-footer">
    <div class="page-footer__top">
      <logo class="page-footer__logo" :color="logoColor"/>
      <SocialMedia :list="socialMediaList" />
    </div>
    <div class="page-footer__bottom">
      <div class="page-footer__column">
        <h5 class="page-footer__title">
          {{ region.name }}
        </h5>
        <div class="contacts">
          <p class="contacts__item">
            {{ region.schedule }}
          </p>
          <a class="contacts__item" :href="'tel:' + region.phone">
            {{ region.phone }}
          </a>
          <a class="contacts__item" :href="'mailto:' + region.email">
            {{ region.email }}
          </a>
        </div>
      </div>
      <div class="page-footer__column">
        <ul class="footer-menu">
          <li v-for="item in footerMenu" :key="item.id" class="footer-menu__item">
            <a class="footer-menu__link" :href="item.link">
              {{ item.text }}
            </a>
          </li>
        </ul>
      </div>
      <div class="page-footer__column">
        <h5 class="page-footer__title">
          Бесплатный по России
        </h5>
        <div class="contacts">
          <a class="contacts__item" href="tel:88001205250">
            8(800)120-52-50
          </a>
        </div>
        <p class="page-footer__copyright">
          ООО «ПИОНЕР»  1994-2022
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import SocialMedia from '@/components/SocialMedia.vue';

export default {
  name: 'PageFooter',
  components: {
    Logo,
    SocialMedia,
  },
  props: {
    region: {
      type: Object,
      required: true,
    },
    footerMenu: {
      type: Array,
      required: true,
    },
    socialMediaList: {
      type: Array,
      required: false,
      default: null,
    },
  },
  data: () => ({
    logoColor: '#ffffff',
  }),
  methods: {
  },
};
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .page-footer {
    padding: 72px 24px;
    background-color: @bg-primary-reverse;

    &__top {
      margin-bottom: 36px;
    }

    &__column {
      margin-bottom: 36px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__logo {
      margin-bottom: 36px;
    }

    &__title {
      margin-bottom: 20px;
      .h5();
    }

    &__copyright {
      margin-top: 40px;
      font-size: 20px;
      line-height: 135%;
      color: @color-primary-reverse;
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;

    &__item {
      display: block;
      margin-bottom: 12px;
      font-size: 20px;
      line-height: 135%;
      color: @color-primary-reverse;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .footer-menu {
    &__item {
      margin-bottom: 12px;
      font-size: 20px;
      line-height: 135%;
      color: @color-primary-reverse;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
