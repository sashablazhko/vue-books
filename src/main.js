import Vue from "vue";
import Vuetify from "vuetify";
import VeeValidate, { Validator } from "vee-validate";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify, {
  theme: {
    primary: "#82352b",
    secondary: "#b0bec5",
    accent: "#8c9eff",
    error: "#b71c1c"
  }
});
import ru from "vee-validate/dist/locale/ru";
Validator.localize("ru", ru);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
