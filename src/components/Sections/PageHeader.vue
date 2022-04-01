<template>
  <div class="page-header">
    <div class="page-header__inner">
      <logo class="page-header__logo" :option="'mini'" :color="logoColor"/>
      <template v-if="!isDesktop">
        <div class="page-header__right-part">
          <search class="page-header__search" />
          <main-menu
            class="page-header__menu"
            :menu="menu"
            :region="region"
            :phone="phone"
            @pick="emitPick"
          />
        </div>
      </template>
      <template v-else>
        <main-menu
          class="page-header__menu"
          :menu="menu"
        />
        <div class="page-header__right-part">
          <tip-button class="page-header__phone" :variant="'phone'" :tip="phone" />
          <tip-button
            class="page-header__region"
            :variant='"map"'
            :tip="region"
            @click="openPopUp"
          />
          <search class="page-header__search" />
        </div>
        <pop-up v-if="isPopUp" @close="closePopUp">
          <region-picker @pick="emitPick" />
        </pop-up>
      </template>
    </div>
  </div>
</template>

<script>
import TipButton from '@/components/TipButton.vue';
import Logo from '@/components/Logo.vue';
import MainMenu from '@/components/main-menu/MainMenu.vue';
import PopUp from '@/components/PopUp.vue';
import Search from '@/components/search/Search.vue';
import RegionPicker from '@/components/RegionPicker.vue';
import { mapState } from 'vuex';

export default {
  name: 'PageHeader',
  components: {
    TipButton,
    Logo,
    MainMenu,
    PopUp,
    Search,
    RegionPicker,
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    logoColor: '#000000',
    isPopUp: false,
  }),
  computed: {
    ...mapState({
      isDesktop: (state) => state.isDesktop,
    }),
  },
  methods: {
    emitPick(value) {
      this.$emit('pick', value);
      this.isPopUp = false;
    },

    openPopUp() {
      this.isPopUp = true;
    },
    closePopUp() {
      this.isPopUp = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "../../less/variables.less";
@import "../../less/mixins.less";

  .page-header {
    @media @desktop {
      margin-bottom: 24px;
      border-top: 20px solid @border-primary;
    }

    &__inner {
      .container();
      display: flex;
      justify-content: space-between;
      padding-top: 32px;

      @media @desktop {
        justify-content: start;
        align-items: center;
        padding-top: 24px;
      }
    }

    &__right-part {
      display: flex;
      margin-left: 24px;

      @media @desktop {
        width: 348px;
        flex-shrink: 1;
        margin-left: auto;
        justify-content: end;
      }
    }

    &__logo {
      @media @desktop {
        margin-right: 76px;
      }
    }

    &__phone {
      @media @desktop {
        margin-right: 24px;
      }
    }

    &__region {
      @media @desktop {
        margin-right: 24px;
      }
    }

    &__search {
      margin-right: 24px;
    }
  }
</style>
