import React, { Component } from "react";
import { GetArticlesByTopic } from "../API";
import ArticleById from "./ArticleCards";

class ArticlesByTopic extends Component {
  state = { articles: [], isLoaded: false };

  componentDidMount() {
    this.fetchArticlesByTopic(this.props.topic);
  }

  fetchArticlesByTopic = topic => {
    GetArticlesByTopic(topic).then(({ data }) => {
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
      <div className="topic-article-page">
        {articles.map(article => {
          return <ArticleById article={article} key={article.article_id} />;
        })}
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default ArticlesByTopic;
