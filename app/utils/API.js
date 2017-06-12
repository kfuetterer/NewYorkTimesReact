import axios from "axios";
const API = {
  getArticles: function() {
    return axios.get("/api/articles");
  },
  saveArticle: function(text) {
    return axios.post("/api/articles", { text });
  },
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  }
};
export default API;