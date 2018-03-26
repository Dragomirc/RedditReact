import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateVotes } from "../actions/index";

class PostCard extends Component {
  onVoteChange = (value, id, currentVotes) => {
    if ((value === -1 && currentVotes > 0) || value === 1) {
      this.props.updateVotes(value, id);
    }
  };

  render() {
    const { title, text, comments, votes, id } = this.props;

    return (
      <li>
        <Link to={`/post/${id}`}>
          <h3>{title}</h3>
          <p>{text}</p>
          <div>Comments:{comments.length}</div>
        </Link>
        <div>Votes:{votes}</div>
        <div>
          <i
            className="fa fa-arrow-circle-up"
            onClick={() => this.onVoteChange(1, id, votes)}
          />
        </div>
        <div>
          <i
            className="fa fa-arrow-circle-down"
            onClick={() => this.onVoteChange(-1, id, votes)}
          />
        </div>
      </li>
    );
  }
}
export default connect(null, { updateVotes })(PostCard);
