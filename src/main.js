import Vue from "vue";
import App from "./App.vue";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";
import "simplebar/dist/simplebar.min.css";
import "./assets/scss/style.scss";
Vue.config.productionTip = false;
Vue.use(FloatingVue);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
