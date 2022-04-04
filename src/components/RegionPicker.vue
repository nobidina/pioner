<template>
  <div class="region-picker">
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
  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput.vue';
import { mapState } from 'vuex';

export default {
  name: 'RegionPicker',
  components: {
    CustomInput,
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
    isPopUp: false,
    tip: '',
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
      const region = this.region.toLowerCase();
      // eslint-disable-next-line max-len
      const foundRegions = this.regions.filter((item) => item.name.toLowerCase().startsWith(region));
      this.foundRegions = foundRegions;
      if (this.foundRegions.length === 0) {
        this.tip = 'Кажется у нас нет представительства в этом городе. Попробуйте другой город. Например: Москва.';
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

      @media @desktop {
        margin-bottom: 24px;
      }
    }
    &__list {
      max-height: 500px;
      overflow-y: scroll;

      @media @desktop {
        display: flex;
        max-height: 300px;
        flex-direction: column;
        flex-wrap: wrap;
        overflow-y: auto;
      }
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

      @media @desktop {
        cursor: pointer;
        text-align: left;
        padding-top: 8px;
        padding-bottom: 8px;
      }
    }

    &__tip {
      line-height: 135%;
      color: @color-error;
    }
  }
</style>
