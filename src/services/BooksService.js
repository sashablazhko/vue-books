import Api from "@/services/Api";

export default {
  getBooks() {
    return Api().get("/books");
  }
};
