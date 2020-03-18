import React, { Component } from "react";
import { GetCommentsByArticleId, ArticleByIdRequest } from "../API";
import { Card, Container, ListGroup } from "react-bootstrap";
import CommentCards from "./CommentCards";
import PostComment from "./PostComment";

class CommentsByArticleId extends Component {
  state = { comments: [], isLoading: false, article: [] };

  componentDidMount() {
    this.fetchComments(this.props.uri);
    this.fetchArticleById(this.props.article_id);
  }

  fetchComments = URI => {
    GetCommentsByArticleId(URI).then(({ data }) => {
      this.setState({ comments: data.comments });
    });
  };

  fetchArticleById = article_id => {
    ArticleByIdRequest(article_id).then(res => {
      this.setState({ article: res.data.article });
    });
  };

  render() {
    const { article, comments } = this.state;
    return (
      <div>
        <Container>
          <Card>
            <Card.Header>{article.title}</Card.Header>
            <Card.Text>{article.body}</Card.Text>
            <Card.Text>{article.votes}</Card.Text>
            <br />
            <Card.Title>Comments:</Card.Title>
            <PostComment currentUser={this.props.currentUser} />
            <ListGroup variant="flush">
              {comments.map(comment => {
                return (
                  <CommentCards comment={comment} key={comment.comment_id} />
                );
              })}
            </ListGroup>
          </Card>
        </Container>
      </div>
    );
  }
}

export default CommentsByArticleId;
