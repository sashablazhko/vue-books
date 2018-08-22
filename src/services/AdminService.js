import Api from "@/services/Api";

export default {
  getAuthors() {
    return Api().get("/admin/getauthors");
  },
  updateAuthor(idAuthor, authorName) {
    return Api().put(`/admin/updateauthor/${idAuthor}`, {
      author_name: authorName
    });
  },
  addAuthor(authorName) {
    return Api().post(`/admin/addauthor`, {
      author_name: authorName
    });
  }
};
