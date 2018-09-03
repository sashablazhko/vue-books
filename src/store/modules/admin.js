import Vue from "vue";
import AdminService from "../../services/AdminService";

export default {
  namespaced: true,
  state: {
    authors: []
  },
  getters: {
    filteredAuthors: state => searchAuthor => {
      if (searchAuthor != "") {
        return state.authors.filter(
          author =>
            `${author.author_name}`
              .toUpperCase()
              .indexOf(searchAuthor.toUpperCase()) >= 0
        );
      } else {
        return state.authors;
      }
    }
  },
  mutations: {
    SET_AUTHORS(state, { authors }) {
      state.authors = authors;
    },
    UPDATE_AUTHOR(state, { authorData }) {
      let author = state.authors.find(a => a.id_author == authorData.id_author);
      Vue.set(author, "author_name", authorData.author_name);
    },
    ADD_AUTHOR(state, { authorData }) {
      state.authors.unshift(authorData);
    },
    DELETE_AUTHOR(state, { authorData }) {
      let authorIndex = state.authors.findIndex(
        a => a.id_author == authorData.id_author
      );
      state.authors.splice(authorIndex, 1);
    }
  },
  actions: {
    GET_AUTHORS_API: ({ commit }) => {
      AdminService.getAuthors().then(
        res => commit("SET_AUTHORS", { authors: res.data.authors }),
        err => console.log(err)
      );
    },
    UPDATE_AUTHOR_API: ({ commit }, { idAuthor, authorName }) => {
      AdminService.updateAuthor(idAuthor, authorName).then(
        res => commit("UPDATE_AUTHOR", { authorData: res.data.author }),
        err => console.log(err)
      );
    },
    ADD_AUTHOR_API: ({ commit }, { authorName }) => {
      AdminService.addAuthor(authorName).then(
        res => commit("ADD_AUTHOR", { authorData: res.data.author }),
        err => console.log(err)
      );
    },
    DELETE_AUTHOR_API: ({ commit }, { idAuthor }) => {
      AdminService.deleteAuthor(idAuthor).then(
        res => commit("DELETE_AUTHOR", { authorData: res.data.author }),
        err => console.log(err)
      );
    }
  }
};
