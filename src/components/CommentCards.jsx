import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import CommentVoter from "./CommentVoter";

const CommentCards = props => {
  const { comment } = props;
  return (
    <>
      <ListGroup.Item>
        <Card.Subtitle className="text-muted">
          &#9998;
          {comment.author} &#8226; {comment.created_at}
        </Card.Subtitle>
        <br />
        <Card.Text>{comment.body}</Card.Text>
        <br />
        <CommentVoter votes={comment.votes} comment_id={comment.comment_id} />
      </ListGroup.Item>
    </>
  );
};

export default CommentCards;
