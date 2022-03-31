<template>
  <div class="region-picker">
    <template v-if="!isDesktop">
      <p class="region-picker__title">Начните вводить название вашего региона</p>
      <custom-input
        class="region-picker__input"
        :option="'sm'"
        :placeholder="'Москва'"
        v-model="region"
      />
      <ul v-if="!tip" class="region-picker__list">
        <li
          v-for="item in foundRegions"
          :key="item.id"
          class="region-picker__item"
          @click="$emit('pick', item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
      <p class="region-picker__tip" v-if="tip">
        {{ tip }}
      </p>
    </template>
    <tip-button
      v-else
      class="main-menu__tip-button"
      :variant='"map"'
      :tip="tip"
    />
  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput.vue';
import TipButton from '@/components/TipButton.vue';
import { mapState } from 'vuex';

export default {
  name: 'RegionPicker',
  components: {
    CustomInput,
    TipButton,
  },
  props: {
    tip: {
      type: String,
      required: false,
      default: '',
    },
  },
  data: () => ({
    region: '',
    foundRegions: '',
    regions: [
      {
        id: 1,
        name: 'Москва',
      },
      {
        id: 2,
        name: 'Минск',
      },
      {
        id: 3,
        name: 'Моршанск',
      },
      {
        id: 4,
        name: 'Архангельск',
      },
      {
        id: 5,
        name: 'Брянск',
      },
      {
        id: 6,
        name: 'Воронеж',
      },
      {
        id: 7,
        name: 'Гусь-Хрустальный',
      },
      {
        id: 8,
        name: 'Дмитров',
      },
      {
        id: 9,
        name: 'Екатеринбург',
      },
      {
        id: 10,
        name: 'Жуков',
      },
      {
        id: 11,
        name: 'Звенигород',
      },
      {
        id: 12,
        name: 'Ижевск',
      },
      {
        id: 13,
        name: 'Краснодар',
      },
      {
        id: 14,
        name: 'Люберцы',
      },
      {
        id: 15,
        name: 'Нижний Новгород',
      },
      {
        id: 16,
        name: 'Орел',
      },
      {
        id: 17,
        name: 'Пермь',
      },
      {
        id: 18,
        name: 'Рязань',
      },
      {
        id: 19,
        name: 'Санкт-Петербург',
      },

      {
        id: 20,
        name: 'Тверь',
      },

      {
        id: 21,
        name: 'Уфа',
      },
      {
        id: 22,
        name: 'Фрязино',
      },
      {
        id: 23,
        name: 'Хабаровск',
      },
      {
        id: 24,
        name: 'Челябинск',
      },
      {
        id: 25,
        name: 'Шатура',
      },
      {
        id: 26,
        name: 'Щелково',
      },
      {
        id: 27,
        name: 'Элиста',
      },
      {
        id: 28,
        name: 'Южа',
      },
      {
        id: 29,
        name: 'Якутск',
      },
    ],
  }),
  created() {
    this.foundRegions = this.regions;
  },
  watch: {
    region: {
      handler() {
        this.searchRegion();
      },
      deep: true,
    },
  },
  computed: {
    ...mapState({
      isDesktop: (state) => state.isDesktop,
    }),
  },
  methods: {
    searchRegion() {
      this.tip = '';
      this.foundRegions = this.regions.filter((item) => item.name.startsWith(this.region));
      if (this.foundRegions.length === 0) {
        this.tip = 'Ничего не нашлось. Попробуйте вести город с большой буквы. Например: Москва';
      }
    },
  },
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .region-picker {
    padding: 0 24px 32px 24px;

    @media @desktop {
      padding: 0;
    }

    &__input {
      margin-bottom: 16px;
    }
    &__list {
      max-height: 500px;
      overflow: scroll;
    }
    &__title {
      margin-bottom: 32px;
      font-size: 24px;
      font-weight: 500;
    }
    &__item {
      padding: 24px 12px;
      box-sizing: border-box;
      weight: 100%;
      text-align: right;
    }

    &__tip {
      line-height: 130%;
      color: @color-error;
    }
  }
</style>
