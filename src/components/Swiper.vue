<template>
  <div class="swiper">
    <div class="swiper__controls">
      <button class="swiper__btn" @click="swipeLeft">
        <svg width="62" height="30" viewBox="0 0 62 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!--eslint-disable-next-line max-len-->
        <path d="M0.585789 13.5858C-0.195259 14.3668 -0.195259 15.6332 0.585789 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585789 13.5858ZM62 13L2 13V17L62 17V13Z" fill="black"/>
        </svg>
      </button>
      <button class="swiper__btn" @click="swipeRight">
        <svg width="62" height="30" viewBox="0 0 62 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!--eslint-disable-next-line max-len-->
          <path d="M61.4142 16.4142C62.1953 15.6332 62.1953 14.3668 61.4142 13.5858L48.6863 0.857864C47.9052 0.0768156 46.6389 0.0768156 45.8579 0.857864C45.0768 1.63891 45.0768 2.90524 45.8579 3.68629L57.1716 15L45.8579 26.3137C45.0768 27.0948 45.0768 28.3611 45.8579 29.1421C46.6389 29.9232 47.9052 29.9232 48.6863 29.1421L61.4142 16.4142ZM0 17H60V13H0V17Z" fill="black"/>
        </svg>
      </button>
    </div>
    <div :style="{ transform: `translateX(${this.shift}px)` }" class="swiper__inner">
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Swiper',
  components: {
  },
  props: {
    shiftWidth: {
      type: Number,
      required: true,
    },
    shift: {
      type: Number,
      required: true,
    },
    slides: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    stepsLeft: null,
    stepsRight: null,
  }),
  methods: {
    countUnitSteps() {
      const steps = Math.floor(this.slides / 2);
      this.slidesLeft = steps;
      this.slidesRight = steps;
    },
    swipeLeft() {
      if (this.slidesLeft == null) {
        this.countUnitSteps();
      }
      if (this.slidesLeft > 0) {
        const shift = this.shift + this.shiftWidth;
        this.$emit('swipe', shift);
        this.slidesLeft -= 1;
        this.slidesRight += 1;
      }
    },
    swipeRight() {
      if (this.slidesRight == null) {
        this.countUnitSteps();
      }
      if (this.slidesRight > 0) {
        const shift = this.shift - this.shiftWidth;
        this.$emit('swipe', shift);
        this.slidesRight -= 1;
        this.slidesLeft += 1;
      }
    },
  },
};
</script>

<style scoped lang="less">
  @import "../less/variables.less";
  @import "../less/mixins.less";

  .swiper {
    overflow: hidden;
    &__controls {
      .container();
      display: flex;
      justify-content: flex-end;
      margin-bottom: 48px;
    }

    &__btn {
      margin-right: 32px;
      padding-top: 7px;
      padding-bottom: 7px;

      &:last-child {
        margin-right: 0;
      }

      &:hover svg path{
        @media @desktop {
          fill: @hover-color;
        }
      }

      &:active svg path{
        @media @desktop {
          fill: @active-color;
        }
      }
    }

    &__borders {
      width: auto;
      margin-left: auto;
      margin-right: auto;
      overflow: hidden;
    }

    &__inner {
      display: flex;
      justify-content: center;
      transform: translateX(0);
      transition: transform 0.5s,
    }
  }
</style>
