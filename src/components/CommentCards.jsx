import React from "react";
import { Card, ListGroup } from "react-bootstrap";

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
        <Card.Text>{comment.votes}</Card.Text>
      </ListGroup.Item>
    </>
  );
};

export default CommentCards;
