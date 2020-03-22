import React, { Component } from "react";
import { Accordion, Card, Container, Media } from "react-bootstrap";
import { ArticleByIdRequest } from "../API";
import { Link } from "@reach/router";
import ErrorHandling from "./ErrorHandling";
import Voter from "./Voter";
import coding from "../images/coding.jpg";
import cooking from "../images/cooking.jpg";
import football from "../images/football.jpg";
import moment from "moment";

class ArticleById extends Component {
  state = {
    article: null,
    isLoaded: false,
    error: null,
    images: {
      coding: coding,
      cooking: cooking,
      football: football
    }
  };

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
    const { article, error, isLoaded, images } = this.state;
    const { article_id, topic, title, author } = this.props.article;
    if (error !== null) {
      return <ErrorHandling status={error.status} msg={error.msg} />;
    }
    return (
      <Container key={article_id}>
        <Accordion className="article-card">
          <Card className="article-card-surface">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              onClick={() => {
                this.handleClick(article_id);
              }}
            >
              <Media>
                <img width={80} height={60} src={images[topic]} alt={[topic]} />
                <Media.Body className="article-card-text">
                  <p className="article-card-topic">{topic}</p>
                  <p className="article-card-title">{title}</p>
                  <Card.Subtitle className="text-muted article-card-author">
                    &#9998;
                    {author}
                  </Card.Subtitle>
                </Media.Body>
              </Media>
              <button
                className="article-show-btn"
                onClick={() => {
                  this.handleClick(article_id);
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
                    <p>
                      Created at: {moment(article.created_at).format("LLL")}
                    </p>
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
