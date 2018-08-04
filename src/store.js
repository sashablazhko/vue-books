import Vue from "vue";
import Vuex from "vuex";
import preload from "../data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: preload.shows,
    searchTerm: ""
  },
  getters: {
    filteredBooks: state => {
      return state.books.filter(
        book =>
          `${book.title} ${book.description}`
            .toUpperCase()
            .indexOf(state.searchTerm.toUpperCase()) >= 0
      );
    },
    searchTerm: state => state.searchTerm,
    selectedBook: state => id => state.books.find(book => id === book.imdbID)
  },
  mutations: {
    updateSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm;
    }
  },
  actions: {}
});
