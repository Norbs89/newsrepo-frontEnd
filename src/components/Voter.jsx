import React, { Component } from "react";
import { patchVotes } from "../API";
import { Container, Row, Col } from "react-bootstrap";

class Voter extends Component {
  state = { addedVote: 0, votedUp: false, votedDown: false };

  addVote = number => {
    const { id, url } = this.props;
    patchVotes(id, number, url);
    this.setState(currentState => {
      return { ...currentState, addedVote: currentState.addedVote + number };
    });
  };

  voteUpSwitch = () => {
    this.setState(currentState => {
      return { ...currentState, votedUp: true };
    });
  };

  voteDownSwitch = () => {
    this.setState(currentState => {
      return { ...currentState, votedDown: true };
    });
  };

  render() {
    const { votes } = this.props;
    const { addedVote, votedDown, votedUp } = this.state;
    return (
      <Container>
        <Row className="vote-btn-row">
          <Col className="vote-btn-col" md={{ span: 4, offset: 4 }}>
            <label className="voter-text">Votes:</label>
            <button
              className="upvote"
              onClick={e => {
                this.addVote(1);
                this.voteUpSwitch();
              }}
              disabled={votedUp}
            >
              &#10004;
            </button>
            <span className="voter-text">{votes + addedVote}</span>
            <button
              className="downvote"
              onClick={e => {
                this.addVote(-1);
                this.voteDownSwitch();
              }}
              disabled={votedDown}
            >
              &#10008;
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Voter;
