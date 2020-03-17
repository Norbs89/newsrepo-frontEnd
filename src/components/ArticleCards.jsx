import React, { Component } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class ArticleById extends Component {
  state = { article: [], isLoaded: false };

  fetchArticleById = article_id => {
    axios
      .get(
        `https://nc-news-hosting-app.herokuapp.com/api/articles/${article_id}`
      )
      .then(res => {
        console.log("request happened");
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
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

export default ArticleById;
