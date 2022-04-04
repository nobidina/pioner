<template>
  <div class="search">
    <template v-if="!isDesktop">
      <icon-button :variant='"search"' :color="'#000000'" @click='openPopUp()'/>
      <pop-up v-if='isPopUp' @close='closePopUp()'>
        <div class="search__inner">
          <label class="search__input-wrapper">
            <input class="search__input" type="text" placeholder="Силовая маши..."/>
            <svg class="search__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_474)">
                <!--eslint-disable-next-line max-len-->
                <path d="M18.1077 16.1984L23.9978 21.7128L21.5882 24L15.4303 18.2037C13.9243 18.9869 12.1841 19.4256 10.3769 19.4256C4.65405 19.4256 0.00216675 15.0705 0.00216675 9.71279C0.00216675 4.35509 4.65405 0 10.3769 0C16.0997 0 20.785 4.35509 20.785 9.71279C20.785 12.2193 19.7476 14.5065 18.1077 16.1984ZM3.44924 9.71279C3.44924 13.3159 6.52819 16.1984 10.3769 16.1984C14.2255 16.1984 17.3045 13.3159 17.3045 9.71279C17.3045 6.10966 14.2255 3.22715 10.3769 3.22715C6.52819 3.22715 3.44924 6.10966 3.44924 9.71279Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_2_474">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </label>
          <ul v-if="!searchTip" class="search__list">
            <li
              v-for="item in list"
              :key="item.id"
              class="search__item"
              @click="closePopUp"
            >
              {{ item.name }}
            </li>
          </ul>
          <p class="search__tip" v-if="tip">
            {{ searchTip }}
          </p>
        </div>
      </pop-up>
    </template>
    <label v-else class="search__input-wrapper">
      <input class="search__input" type="text" placeholder="Силовая маши..."/>
      <svg class="search__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_474)">
          <!--eslint-disable-next-line max-len-->
          <path d="M18.1077 16.1984L23.9978 21.7128L21.5882 24L15.4303 18.2037C13.9243 18.9869 12.1841 19.4256 10.3769 19.4256C4.65405 19.4256 0.00216675 15.0705 0.00216675 9.71279C0.00216675 4.35509 4.65405 0 10.3769 0C16.0997 0 20.785 4.35509 20.785 9.71279C20.785 12.2193 19.7476 14.5065 18.1077 16.1984ZM3.44924 9.71279C3.44924 13.3159 6.52819 16.1984 10.3769 16.1984C14.2255 16.1984 17.3045 13.3159 17.3045 9.71279C17.3045 6.10966 14.2255 3.22715 10.3769 3.22715C6.52819 3.22715 3.44924 6.10966 3.44924 9.71279Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_2_474">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </label>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue';
import PopUp from '@/components/PopUp.vue';
import { mapState } from 'vuex';

export default {
  name: 'Search',
  components: {
    IconButton,
    PopUp,
  },
  data: () => ({
    list: [
      {
        id: 1,
        name: 'Силовая машина',
      },
      {
        id: 2,
        name: 'Электромагнитные расходомеры-счетчики',
      },
      {
        id: 3,
        name: 'Штуцер передвижной',
      },
    ],
    searchTip: '',
    isPopUp: false,
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
    },
  },
};
</script>

<style scoped lang="less">
  @import "../../less/variables.less";

  .search {
    &__input-wrapper {
        position: relative;
        display: block;

      &:hover .search__input {
        @media @desktop {
          width: 205px;
        }
      }
    }
    &__input {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: 40px;
        padding: 8px 28px 8px 8px;
        font-size: 16px;
        color: @color-primary;
        border: 4px solid @border-primary;
        -webkit-appearance: none;
        -webkit-border-radius:0;
        border-radius:0;
      @media @desktop {
        transition: width 0.3s;
        width: 40px;
        font-size: 18px;
      }
    }

    &__icon {
      position: absolute;
      top: 8px;
      right: 8px;
    }

    &__inner {
      padding: 32px 24px;
    }

    &__list {
      max-height: 500px;
      overflow-y: scroll;
    }

    &__item {
      padding: 24px 12px;
      box-sizing: border-box;
      weight: 100%;
      line-height: 130%;
      text-align: right;
    }

    &__tip {
      line-height: 130%;
      color: @color-error;
    }
  }
</style>
