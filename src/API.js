import axios from "axios";

const baseURL = "https://nc-news-hosting-app.herokuapp.com/api";

const AllArticlesRequest = () => {
  return axios.get(`${baseURL}/articles`);
};

const ArticleByIdRequest = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`);
};

const AllTopicsRequest = () => {
  return axios.get(`${baseURL}/topics`);
};

// {
//   params: query
// }

// query {
// topic: ;'coding',
// sortBy:
// }

export { AllArticlesRequest, ArticleByIdRequest, AllTopicsRequest };
