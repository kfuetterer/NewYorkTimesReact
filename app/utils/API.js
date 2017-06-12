import axios from "axios";
const nytAPI= "7ca69eff4bd346239efe73cfddb6ac75";

const API = {
    runQuery: function(topic, startYear, endYear) {
        console.log(query);
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q="+ topic + "&begin_date=" + startYear + "0101" + "&begin_date=" + endYear + "0231";
        return axios.get(queryURL).then(function(response) {
            let results = [];

            if (response.data.results[0]) {
                for(let i = 0; i<5; i++){
                    results.push(response.data.results[i].formatted);
                }
                return results;
            } else{
                return "No articles found.";
            }
        });
    },
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