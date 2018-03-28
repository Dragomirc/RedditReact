import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PostCard extends Component {
  onVoteChange = (value, id, currentVotes) => {
    if ((value === -1 && currentVotes > 0) || value === 1) {
      this.props.socket.emit("updateVotes", {
        value: value,
        id: id
      });
    }
  };

  render() {
    const { title, text, comments, votes, id } = this.props;
    return (
      <div className="post_card_container">
        <Link to={`/post/${id}`}>
          <h3>Title: {title}</h3>
          <p>Descritpion:{text}</p>
          <div>Comments:{comments.length}</div>
        </Link>
        <div className="post_card_container_icons">
          <i
            className="fa fa-arrow-circle-up"
            onClick={() => this.onVoteChange(1, id, votes)}
          />

          <i
            className="fa fa-arrow-circle-down"
            onClick={() => this.onVoteChange(-1, id, votes)}
          />
        </div>
        <div className="post_card_container_votes">Votes:{votes}</div>
      </div>
    );
  }
}
