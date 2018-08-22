import Vue from "vue";
import Books from "../../services/BooksService";

export default {
  namespaced: true,
  state: {
    books: [],
    searchTerm: ""
  },
  getters: {
    filteredBooks: state => {
      return state.books.filter(
        book =>
          `${book.book_name} ${book.book_description} ${book.author_name}`
            .toUpperCase()
            .indexOf(state.searchTerm.toUpperCase()) >= 0
      );
    },
    searchTerm: state => state.searchTerm,
    selectedBook: state => id => state.books.find(book => id == book.id_book)
  },
  mutations: {
    updateSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm;
    },
    clearSearchTerm(state) {
      state.searchTerm = "";
    },
    SET_BOOKS(state, { books }) {
      state.books = books;
    },
    ADD_CHAPTER(state, { chapterContent, bookId, chapterId }) {
      let book = state.books.find(book => book.id_book == bookId);
      let chapter = book.chapters.find(
        chapter => chapter.id_chapter == chapterId
      );
      Vue.set(chapter, "chapter_content", chapterContent);
      // chapter = { ...chapter, chapter_content: chapterContent };
    }
  },
  actions: {
    GET_BOOKS_API: ({ commit }) => {
      Books.getBooks().then(
        res => commit("SET_BOOKS", { books: res.data }),
        err => console.log(err)
      );
    },
    GET_CHAPTER_API: ({ commit }, { bookId, chapterId }) => {
      Books.getChapter(bookId, chapterId).then(
        res => {
          let payload = {
            chapterContent: res.data.chapter_content,
            bookId,
            chapterId
          };
          commit("ADD_CHAPTER", payload);
        },
        err => console.log(err)
      );
    }
  }
};
