import React, { Component } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { ArticleByIdRequest } from "../API";
import { Link } from "@reach/router";

class ArticleById extends Component {
  state = { article: [], isLoaded: false };

  fetchArticleById = article_id => {
    ArticleByIdRequest(article_id).then(res => {
      this.setState({ article: res.data.article, isLoaded: true });
    });
  };

  handleClick = article_id => {
    if (!this.state.isLoaded) {
      this.fetchArticleById(article_id);
    } else {
      this.setState(currentState => {
        return { isLoaded: !currentState.isLoaded };
      });
    }
  };

  render() {
    const { article } = this.state;

    return (
      <Container key={this.props.article.article_id}>
        <Accordion className="article-card">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <p>TOPIC: {this.props.article.topic}</p>
              <p>TITLE: {this.props.article.title}</p>
              <button
                onClick={() => {
                  this.handleClick(this.props.article.article_id);
                }}
              >
                Click to read article
              </button>
              <p>{this.props.article.votes}</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>{article.body}</p>
                <p>Author: {article.author}</p>
                <p>Created at: {article.created_at}</p>
                <p>Comments: {article.comment_count}</p>
                <Link to={`/articles/${article.article_id}/comments`}>
                  Click to see comments
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

export default ArticleById;
