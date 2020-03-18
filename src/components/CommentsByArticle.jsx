import React, { Component } from "react";
import { GetCommentsByArticleId, ArticleByIdRequest } from "../API";
import { Card, Container, ListGroup } from "react-bootstrap";
import CommentCards from "./CommentCards";
import PostComment from "./PostComment";

//if isPosted true, rerender comments on cDU
class CommentsByArticleId extends Component {
  state = { comments: [], isLoading: false, article: [], isPosted: false };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isPosted !== this.state.isPosted) {
      this.fetchComments(this.props.uri);
    }
  }

  commentPosted = boolean => {
    this.setState({ isPosted: boolean });
  };

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
            <PostComment
              currentUser={this.props.currentUser}
              URI={this.props.uri}
              commentPosted={this.commentPosted}
            />
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
