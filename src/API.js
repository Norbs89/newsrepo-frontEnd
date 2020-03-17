import axios from "axios";

const baseURL = "https://nc-news-hosting-app.herokuapp.com/api";

const AllArticlesRequest = query => {
  return axios.get(`${baseURL}/articles`, {
    params: {
      topic: query
    }
  });
};

const ArticleByIdRequest = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`);
};

const GetArticlesByTopic = topic => {
  return axios.get(`${baseURL}/articles`, {
    params: {
      topic
    }
  });
};

const GetCommentsByArticleId = URI => {
  return axios.get(`${baseURL}${URI}`);
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

export {
  AllArticlesRequest,
  ArticleByIdRequest,
  AllTopicsRequest,
  GetArticlesByTopic,
  GetCommentsByArticleId
};
