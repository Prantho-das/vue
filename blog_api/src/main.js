import { createApp } from "vue";
import axios from "axios"
import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes/routes";
import store from "./store/store";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL = process.env.VUE_APP_MAIN_URL
const route = createRouter({ routes, history: createWebHistory() });


createApp(App)
  .use(route)
  .use(store)
  .mount("#app");
// let token = sessionStorage.getItem('token')
// let user = sessionStorage.getItem('usr')
route.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from);
  console.log(next);
  // if (to.matched[0].meta === "guest") {
  //   if (token || user) {
  //     route.back()
  //   }
  // } else if (to.matched[0].meta === "auth") {
  //   if (token && user) {
  //     route.replace('/login')
  //   }
  // } else {
  //   next()
  // }
})
import "bootstrap/dist/js/bootstrap.js";

