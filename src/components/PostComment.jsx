import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

class PostComment extends Component {
  state = { username: `${this.props.currentUser}`, body: "test comment" };

  render() {
    return (
      <>
        <Form>
          <Form.Group>
            <Form.Label>Your Comments:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="enter your comments here..."
            />
            <button type="submit">Post a comment</button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default PostComment;
