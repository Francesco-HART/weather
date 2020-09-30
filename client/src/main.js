import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWind, faTint, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { BootstrapVue, IconsPlugin, CardPlugin } from 'bootstrap-vue';
import App from './App.vue';
import store from './store/index';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(CardPlugin, BootstrapVue, IconsPlugin);
library.add(faWind, faTint, faThermometerHalf);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
