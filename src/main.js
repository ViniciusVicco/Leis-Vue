import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import router from "./router";
import vuetify from './plugins/vuetify';
import Vuetify from "vuetify";
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueRouter);


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
