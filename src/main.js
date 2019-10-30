import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVue)
library.add(faHome)
library.add(faBell)
library.add(faUser)
library.add(faHandshake)
library.add(faFolder)
library.add(faClock)
library.add(faDoorOpen)
Vue.use(VueAxios, axios)
Vue.component('apexchart', VueApexCharts)
Vue.component('font-awesome-icon', FontAwesomeIcon)

require('./assets/css/style.css')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
