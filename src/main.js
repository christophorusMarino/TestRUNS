import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://runs-dev-test.herokuapp.com/runs-dev-test/v1/'

new Vue({
  router,
  store,
  Vuetify,
  render: (h) => h(App)
}).$mount('#app')
