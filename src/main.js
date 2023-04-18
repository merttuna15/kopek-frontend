import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import tr from 'vuetify/lib/locale/tr'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)


new Vue({
  vuetify,
  router,
  axios,
  store,
  render: h => h(App)
})
.$mount('#app');


export default new vuetify({
  lang: {
    locales: { tr },
    current: 'tr',
  },
})