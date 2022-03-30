<template>
  <ul class="social-media">
    <li v-for="item in list" :key="item.id" class="social-media__item">
      <a v-if="item.id === 'facebook'" class="social-media__link" :href="item.link">
        <FacebookIcon :color="'#ffffff'" />
      </a>
      <a v-if="item.id === 'telegram'" class="social-media__link" :href="item.link">
        <TelegramIcon :color="'#ffffff'"/>
      </a>
      <a v-if="item.id === 'instagram'" class="social-media__link" :href="item.link">
        <InstagramIcon :color="'#ffffff'"/>
      </a>
      <a v-if="item.id === 'vk'" class="social-media__link" :href="item.link">
        <VKIcon :color="'#ffffff'"/>
      </a>
    </li>
  </ul>
</template>

<script>
import FacebookIcon from '@/icons/FacebookIcon.vue';
import TelegramIcon from '@/icons/TelegramIcon.vue';
import InstagramIcon from '@/icons/InstagramIcon.vue';
import VKIcon from '@/icons/VKIcon.vue';

export default {
  name: 'SocialMedia',
  components: {
    FacebookIcon,
    TelegramIcon,
    InstagramIcon,
    VKIcon,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .social-media {
    display: flex;

    &__item {
      margin-right: 24px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__link {
      display: block;
      width: 40px;
      height: 40px;
    }
  }
</style>
