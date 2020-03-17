import axios from "axios";

const baseURL = "https://nc-news-hosting-app.herokuapp.com/api";

const AllArticlesRequest = () => {
  return axios.get(`${baseURL}/articles`);
};

export default AllArticlesRequest;
