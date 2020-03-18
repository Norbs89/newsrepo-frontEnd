import React from "react";
import ArticleById from "./ArticleCards";
import { AllArticlesRequest } from "../API";

class DisplayAllArticles extends React.Component {
  state = { articles: null, isLoaded: false, articleById: [] };

  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = () => {
    AllArticlesRequest().then(({ data }) => {
      this.setState(currentState => {
        return {
          ...currentState,
          articles: data.articles,
          isLoaded: true
        };
      });
    });
  };

  render() {
    const { articles, isLoaded } = this.state;
    return isLoaded ? (
      <div>
        {articles.map(article => {
          return <ArticleById article={article} key={article.article_id} />;
        })}
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default DisplayAllArticles;
