import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Voter from "./Voter";

const CommentCards = props => {
  const { comment, user, deleteComment } = props;
  return (
    <>
      <ListGroup.Item className="comment-list">
        <Card.Subtitle className="text-muted">
          &#9998;
          {comment.author} &#8226; {comment.created_at}
        </Card.Subtitle>
        <br />
        <Card.Text>{comment.body}</Card.Text>
        <br />
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
        <Voter votes={comment.votes} id={comment.comment_id} url={"comments"} />
      </ListGroup.Item>
    </>
  );
};

export default CommentCards;
