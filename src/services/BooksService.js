import Api from "@/services/Api";

export default {
  getBooks() {
    return Api().get("/books");
  },
  getChapter(bookId, chapterId) {
    return Api().get(`/books/${bookId}/${chapterId}`);
  }
};
