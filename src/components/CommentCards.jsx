import React from "react";
import { Card, ListGroup, Container } from "react-bootstrap";
import Voter from "./Voter";
import moment from "moment";

const CommentCards = props => {
  const { comment, user, deleteComment } = props;
  return (
    <>
      <ListGroup.Item className="comment-list">
        <Card.Subtitle className="text-muted">
          &#9998;
          {comment.author} &#8226; {moment(comment.created_at).format("LLL")}
        </Card.Subtitle>
        <br />
        <Card.Text>{comment.body}</Card.Text>
        <br />

        <Container className="votes-container">
          <Voter
            votes={comment.votes}
            id={comment.comment_id}
            url={"comments"}
          />
          {user === comment.author && (
            <button
              className="delete-comment-btn"
              onClick={e => {
                deleteComment(comment.comment_id);
              }}
            >
              <i class="far fa-trash-alt"></i>
            </button>
          )}
        </Container>
      </ListGroup.Item>
    </>
  );
};

export default CommentCards;
