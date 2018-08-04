import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import Search from "./views/Search.vue";
import Details from "./views/Details.vue";
import FourOhFour from "./views/FourOhFour.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/details/:id",
      name: "details",
      component: Details
    },
    {
      path: "*",
      component: FourOhFour
    }
  ]
});
