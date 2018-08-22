import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import books from "./modules/books";
import user from "./modules/user";
import admin from "./modules/admin";

export default new Vuex.Store({
  modules: {
    books,
    user,
    admin
  },
  strict: process.env.NODE_ENV !== "production"
});
