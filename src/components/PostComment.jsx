import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { PostCommentRequest } from "../API";

class PostComment extends Component {
  state = { body: "", isPosted: false };

  handleInput = value => {
    this.setState(currentState => {
      return {
        ...currentState,
        body: value,
        isPosted: false
      };
    });
  };

  handleSubmit = e => {
    const { URI, currentUser, commentPosted } = this.props;
    e.preventDefault();
    PostCommentRequest(URI, currentUser, this.state.body).then(res => {
      commentPosted();
      this.setState({
        body: "",
        isPosted: true
      });
    });
  };

  render() {
    const { body, isPosted } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Your Comments:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="enter your comments here..."
              onChange={e => this.handleInput(e.target.value)}
              value={body}
              required
            />
            <button type="submit">Post a comment</button>
            {isPosted && <p>Your comment has been posted!</p>}
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default PostComment;
