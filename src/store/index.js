import Vue from 'vue';
import Vuex from 'vuex';
import types from './types';

Vue.use(Vuex);

function isDesktop() {
  return window.innerWidth >= 1200;
}

export default new Vuex.Store({
  state: {
    isColorMode: false,
    isDesktop: isDesktop(),
  },
  mutations: {
    [types.SET_COLOR_MODE]: (state) => {
      state.isColorMode = !state.isColorMode;
    },
    [types.SET_DESKTOP_VERSION](state, value) {
      state.isDesktop = value;
    },
  },
});
