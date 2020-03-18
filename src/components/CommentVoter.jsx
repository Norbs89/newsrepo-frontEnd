import React, { Component } from "react";
import { patchVotesOnComments } from "../API";

class CommentVoter extends Component {
  state = { addedVote: 0, votedUp: false, votedDown: false };

  addVote = number => {
    const { comment_id } = this.props;
    patchVotesOnComments(comment_id, number);
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
      <>
        <button
          onClick={e => {
            this.addVote(1);
            this.voteUpSwitch();
          }}
          disabled={votedUp}
        >
          up
        </button>
        {votes + addedVote}
        <button
          onClick={e => {
            this.addVote(-1);
            this.voteDownSwitch();
          }}
          disabled={votedDown}
        >
          down
        </button>
      </>
    );
  }
}

export default CommentVoter;
