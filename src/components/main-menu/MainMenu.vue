<template>
  <div class="main-menu">
    <template v-if="!isDesktop">
      <icon-button :variant='"burger"' :color="iconColor" @click='openPopUp()'/>
      <pop-up class="main-menu__pop-up" v-if='isPopUp' @close='closePopUp()'>
        <template v-if="!isRegionPicker">
        <list :menu="menu" />
        <div class="main-menu__bottom-part">
          <tip-button
            class="main-menu__tip-button"
            :variant='"map"'
            :tip="region"
            @click="openRegion"
          />
          <tip-button class="main-menu__tip-button" :variant='"phone"' :tip="phone" />
        </div>
        </template>
        <region-picker v-if="isRegionPicker" @pick="emitPick"/>
      </pop-up>
    </template>
    <list v-else :list="menu" />
  </div>
</template>

<script>

import IconButton from '@/components/IconButton.vue';
import List from '@/components/main-menu/List.vue';
import PopUp from '@/components/PopUp.vue';
import RegionPicker from '@/components/RegionPicker.vue';
import TipButton from '@/components/TipButton.vue';
import { mapState } from 'vuex';

export default {
  name: 'MainMenu',
  components: {
    IconButton,
    List,
    PopUp,
    RegionPicker,
    TipButton,
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
    region: {
      type: String,
      required: false,
      default: '',
    },
    phone: {
      type: String,
      required: false,
      default: '',
    },
  },
  data: () => ({
    isPopUp: false,
    isRegionPicker: false,
  }),
  computed: {
    ...mapState({
      isDesktop: (state) => state.isDesktop,
    }),
  },
  methods: {
    openPopUp() {
      this.isPopUp = true;
    },
    closePopUp() {
      this.isPopUp = false;
      this.isRegionPicker = false;
    },
    openRegion() {
      this.isRegionPicker = true;
    },
    closeRegion() {
      this.isRegionPicker = false;
    },
    emitPick(value) {
      this.$emit('pick', value);
      this.closeRegion();
    },
  },
};
</script>

<style scoped lang="less">
  @import "../../less/variables.less";

  .main-menu {
    @media @desktop {
      display: flex;
      justify-content: center;
    }

    &__pop-up {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 40px;
    }

    &__bottom-part {
      display: flex;
      flex-direction: column;
    }

    &__tip-button {
      box-sizing: border-box;
      width: 100%;
      padding: 20px 24px;
    }
  }
</style>
