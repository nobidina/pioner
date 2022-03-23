<template>
  <div class="region-picker">
    <p class="region-picker__title">Начните вводить название вашего региона</p>
    <custom-input :option="'small'" :placeholder="'Москва'"/>
    <ul v-for="item in regions" :key="item.id" class="region-picker__list">
      <li class="region-picker__item">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput.vue';

export default {
  name: 'RegionPicker',
  components: {
    CustomInput,
  },
  data: () => ({
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
    ],
  }),
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";

  .region-picker {
    padding: 32px 24px;
    &__title {
      margin-bottom: 32px;
      font-size: 24px;
      font-weight: 500;
    }
    &__item {
      padding-top: 24px;
      padding-bottom: 24px;
      box-sizing: border-box;
      weight: 100%;
      text-align: right;
    }
  }
</style>
