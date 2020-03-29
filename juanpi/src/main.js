import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/flexble'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueJsonp from 'vue-jsonp'
import axios from 'axios'

Vue.use(MintUI)
Vue.use(VueJsonp)
Vue.prototype.$axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
