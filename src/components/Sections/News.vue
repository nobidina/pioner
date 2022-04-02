<template>
  <div class="news">
    <div class="news__inner">
      <h3 class="news__title">
        {{ title }}
      </h3>
      <Flicking
        v-if="!isDesktop"
        class="news__swiper"
        :options="{ circular: true, bound: true }"
      >
        <Card
          v-for="item in news"
          :key="item.id"
          class="news__card"
          :option="'md'"
          :product="item"
        />
      </Flicking>
      <div v-else class="news__cards">
        <Card
          v-for="item in news"
          :key="item.id"
          class="news__card"
          :class="{'news__card--lg': item.isMain}"
          :option="item.isMain ? 'lg' : 'md'"
          :product="item"
        />
      </div>
    </div>
    <div class="news__btn-wrapper">
      <Btn :option="'lg'" :text="'Больше новостей'" />
    </div>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking';
import Btn from '@/components/Btn.vue';
import Card from '@/components/Card.vue';
import { mapState } from 'vuex';

export default {
  name: 'News',
  components: {
    Btn,
    Card,
    Flicking,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    news: {
      type: Array,
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
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .news {
    margin-bottom: 100px;

    @media @desktop {
      margin-bottom: 192px;
    }

    &__inner {
      @media @desktop {
        position: relative;
        .container();
      }
    }
    &__swiper {
      margin-bottom: 36px;
    }
    &__cards {
      @media @desktop {
        display: flex;
        flex-wrap: wrap;
        margin-left: 190px;
        margin-bottom: 36px;
      }
    }
    &__card {
      margin-right: 16px;

      @media @desktop {
        margin-right: 32px;
      }

      &--lg {
        @media @desktop {
          margin-right: 0;
          margin-bottom: 32px;
        }
      }

      &:last-child {
        margin-right: 0;
        @media @desktop {
          margin-right: 0;
        }
      }
    }
    &__title {
      box-sizing: border-box;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
      margin-bottom: 28px;
      .h3--vertical();

      @media @desktop {
        position: absolute;
        left: 0;
        top: 0;
        width: auto;
        padding-left: 0;
        padding-right: 0;
        margin-bottom: 0;
      }
    }
    &__btn-wrapper {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;

      @media @desktop {
        width: 1108px;
        margin-left: auto;
        margin-right: auto;
        padding-right: 0;
        padding-left: 190px;
      }
    }
  }
</style>
