import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueSpotify from 'vue-spotify'
import Spotify from 'spotify-web-api-node'
import axios from 'axios';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(Buefy);
Vue.use(axios);
Vue.use({
  install (Vue) {
  Vue.prototype.$api = axios.create({
    baseURL: 'http://localhost:8080/'
  })
}
})
Vue.use(VueSpotify, new Spotify())