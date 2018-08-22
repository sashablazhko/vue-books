import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import Search from "./views/Search.vue";
import Details from "./views/Details.vue";
import Signup from "./views/Signup.vue";
import Signin from "./views/Signin.vue";
import Authors from "./views/admin/Authors.vue";
import FourOhFour from "./views/FourOhFour.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "landing",
      component: Landing
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/details/:bookId/:chapterId",
      name: "details",
      component: Details
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    },
    {
      path: "/admin/authors",
      name: "authors",
      component: Authors
    },
    {
      path: "*",
      component: FourOhFour
    }
  ],
  mode: "history"
  // base: window.location.pathname,
  // linkActiveClass: "active"
});
