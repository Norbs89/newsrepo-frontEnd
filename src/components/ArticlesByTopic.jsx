import React, { Component } from "react";
import { GetArticlesByTopic } from "../API";
import ArticleById from "./ArticleCards";

class ArticlesByTopic extends Component {
  state = { articles: [], isLoading: false };

  componentDidMount() {
    this.fetchArticlesByTopic(this.props.topic);
  }

  fetchArticlesByTopic = topic => {
    GetArticlesByTopic(topic).then(({ data }) => {
      this.setState({ articles: data.articles });
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <>
        {articles.map(article => {
          return <ArticleById article={article} key={article.article_id} />;
        })}
      </>
    );
  }
}

export default ArticlesByTopic;
