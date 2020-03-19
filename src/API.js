import axios from "axios";

const baseURL = "https://nc-news-hosting-app.herokuapp.com/api";

const AllArticlesRequest = () => {
  return axios.get(`${baseURL}/articles`, {});
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

const PostCommentRequest = (URI, user, body) => {
  return axios.post(`${baseURL}${URI}`, { username: user, body: body });
};

const patchVotes = (id, vote, url) => {
  return axios.patch(`${baseURL}/${url}/${id}`, { inc_votes: vote });
};

const DeleteCommentRequest = id => {
  return axios.delete(`${baseURL}/comments/${id}`);
};

export {
  AllArticlesRequest,
  ArticleByIdRequest,
  AllTopicsRequest,
  GetArticlesByTopic,
  GetCommentsByArticleId,
  PostCommentRequest,
  patchVotes,
  DeleteCommentRequest
};
