import React, { Component } from "react";
import {
  GetCommentsByArticleId,
  ArticleByIdRequest,
  DeleteCommentRequest
} from "../API";
import { Card, Container, ListGroup } from "react-bootstrap";
import CommentCards from "./CommentCards";
import PostComment from "./PostComment";
import Voter from "./Voter";
import moment from "moment";

//if isPosted true, rerender comments on cDU
class CommentsByArticleId extends Component {
  state = {
    comments: [],
    isLoaded: false,
    article: null,
    isPosted: false,
    isDeleted: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.isPosted !== this.state.isPosted ||
      prevState.isDeleted !== this.state.isDeleted
    ) {
      this.fetchComments(this.props.uri);
    }
  }

  commentPosted = () => {
    this.setState(currentState => {
      return { ...currentState, isPosted: !currentState.isPosted };
    });
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

  deleteComment = comment_id => {
    DeleteCommentRequest(comment_id).then(res => {
      this.setState(currentState => {
        return { ...currentState, isDeleted: !currentState.isDeleted };
      });
    });
  };

  fetchArticleById = article_id => {
    ArticleByIdRequest(article_id).then(res => {
      this.setState(currentState => {
        return {
          ...currentState,
          article: res.data.article,
          isLoaded: true
        };
      });
    });
  };

  render() {
    const { article, comments, isLoaded } = this.state;

    return isLoaded ? (
      <div className="comments-page">
        <Container>
          <Card className="article-comments-page">
            <Card.Header className="article-comments-header">
              {article.title}
            </Card.Header>
            <Card.Text className="article-comments-text">
              {article.body}
            </Card.Text>
            <Card.Text className="article-comments-text">
              Created at: {moment(article.created_at).format("LLL")}
              <Voter
                votes={article.votes}
                id={article.article_id}
                url={"articless"}
              />
            </Card.Text>
            <br />
            <Card.Title className="comments-intro">Comments:</Card.Title>
            <PostComment
              currentUser={this.props.currentUser}
              URI={this.props.uri}
              commentPosted={this.commentPosted}
            />
            <ListGroup variant="flush">
              {comments.map(comment => {
                return (
                  <CommentCards
                    comment={comment}
                    key={comment.comment_id}
                    user={this.props.currentUser}
                    deleteComment={this.deleteComment}
                  />
                );
              })}
            </ListGroup>
          </Card>
        </Container>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default CommentsByArticleId;
