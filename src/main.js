import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import store from "./store/index";
import GAuth from 'vue-google-oauth2'

Vue.config.productionTip = false;

const gauthOption = {
  clientId: `${process.env.VUE_APP_BACKEND_URL}`,
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
