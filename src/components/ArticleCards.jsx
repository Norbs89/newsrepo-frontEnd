import React, { Component } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { ArticleByIdRequest } from "../API";
import { Link } from "@reach/router";
import ErrorHandling from "./ErrorHandling";
import Voter from "./Voter";

class ArticleById extends Component {
  state = { article: null, isLoaded: false, error: null };

  fetchArticleById = article_id => {
    ArticleByIdRequest(article_id)
      .then(res => {
        this.setState({ article: res.data.article, isLoaded: true });
      })
      .catch(err => {
        this.setState({
          error: {
            status: err.response.status,
            msg: err.response.msg
          }
        });
      });
  };

  handleClick = article_id => {
    if (!this.state.isLoaded) {
      this.fetchArticleById(article_id);
    } else {
      this.setState(currentState => {
        return { ...currentState, isLoaded: !currentState.isLoaded };
      });
    }
  };

  render() {
    const { article, error, isLoaded } = this.state;
    if (error !== null) {
      return <ErrorHandling status={error.status} msg={error.msg} />;
    }
    return (
      <Container key={this.props.article.article_id}>
        <Accordion className="article-card">
          <Card className="article-card-surface">
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
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="article-card-body">
                {isLoaded ? (
                  <>
                    <p>{article.body}</p>
                    <p>Author: {article.author}</p>
                    <p>Created at: {article.created_at}</p>
                    <Voter
                      votes={article.votes}
                      id={article.article_id}
                      url={"articles"}
                    />
                    <p>Comments: {article.comment_count}</p>
                    <Link to={`/articles/${article.article_id}/comments`}>
                      Click to see comments
                    </Link>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

export default ArticleById;
