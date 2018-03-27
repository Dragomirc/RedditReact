import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";

import PostCard from "./PostCard";

class SinglePagePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "Please add your new comment here",
      error: ""
    };
    this.id = this.props.match.params.id;
  }

  renderComments = comment => (
    <li key={v4()}>
      <p>{comment}</p>
    </li>
  );

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.commentText) {
      this.setState({ error: "Please enter a value before submitting" });
    } else {
      this.props.socket.emit("addComment", {
        commentText: this.state.commentText,
        id: this.id
      });

      this.setState({ commentText: "", error: "" });
    }
  };
  handleChange = event => {
    this.setState({ commentText: event.target.value });
  };

  render() {
    console.log("SinglePage socket", this.props.socket);
    const { posts } = this.props;
    if (!Object.keys(posts).length) {
      return <div>Loading...</div>;
    }
    const { comments } = posts[this.id];

    return (
      <div>
        <PostCard {...posts[this.id]} socket={this.props.socket} />

        <div>{this.state.error}</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <textarea
              value={this.state.commentText}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>{comments.map(this.renderComments)}</ul>
      </div>
    );
  }
}
const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(SinglePagePost);
