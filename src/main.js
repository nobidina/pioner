import Vue from 'vue';
import debounce from 'lodash.debounce';
import App from './App.vue';
import store from './store';
import types from './store/types';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

function getScreenSize() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1200) {
    store.commit(types.SET_DESKTOP_VERSION, true);
  } else {
    store.commit(types.SET_DESKTOP_VERSION, false);
  }
}

window.addEventListener('resize', debounce(getScreenSize, 200));
