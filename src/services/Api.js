import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `http://laravel-books/api`,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};
