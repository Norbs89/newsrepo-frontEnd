import React from "react";
import ArticleById from "./ArticleCards";
import { AllArticlesRequest } from "../API";

class DisplayAllArticles extends React.Component {
  state = { articles: [], isLoaded: false, articleById: [] };

  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = () => {
    AllArticlesRequest().then(({ data }) => {
      this.setState({ articles: data.articles });
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(article => {
          return <ArticleById article={article} key={article.article_id} />;
        })}
      </div>
    );
  }
}

export default DisplayAllArticles;
