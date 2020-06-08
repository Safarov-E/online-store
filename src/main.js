import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  vuetify : new Vuetify(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
