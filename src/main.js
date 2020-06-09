import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import router from './router'
import store from './store'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  vuetify : new Vuetify(),
  router,
  store,
  render: h => h(App),
  created () {
    var firebaseConfig = {
      apiKey: "AIzaSyCV63zuyM6aEU30j1dbmGqIEf9z-_crH2Y",
      authDomain: "onlinestore-7794e.firebaseapp.com",
      databaseURL: "https://onlinestore-7794e.firebaseio.com",
      projectId: "onlinestore-7794e",
      storageBucket: "onlinestore-7794e.appspot.com",
      messagingSenderId: "862877312535",
      appId: "1:862877312535:web:1a096fcd83b8e7d0629e52",
      measurementId: "G-H72RP0GGVY"
    }
    fb.initializeApp(firebaseConfig)
    fb.auth().onAuthStateChanged(user => {
      if(user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')
