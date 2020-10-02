import Vue from "vue"
import App from './App.vue'
import router from './router'
import {store} from './store/index'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faWind, faTint, faThermometerHalf, faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMoment from 'vue-moment'
import AsyncComputed from 'vue-async-computed'
const moment = require('moment')
require('moment/locale/fr')
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
Vue.use(LMap);
Vue.use(LMarker);
Vue.use(LTileLayer)

library.add(faWind, faTint, faThermometerHalf, faLongArrowAltDown)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(AsyncComputed)

Vue.use(VueMoment, {
    moment,
})

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
