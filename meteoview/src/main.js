import Vue from 'vue'
import router from './router'
import store from './store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faWind, faTint, faThermometerHalf, faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import {CardPlugin} from 'bootstrap-vue'
import App from './App.vue'


Vue.use(CardPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

library.add(faWind, faTint, faThermometerHalf, faLongArrowAltDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
