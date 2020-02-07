import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy' // 追記
import 'buefy/dist/buefy.css' // 追記
import vuetify from './plugins/vuetify';

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
