import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueSpotify from 'vue-spotify'
import Spotify from 'spotify-web-api-node'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(Buefy);
Vue.use(VueSpotify, new Spotify())