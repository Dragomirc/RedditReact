import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { v4 } from "uuid";
import { addComment } from "../actions/index";
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
      this.props.addComment(this.state.commentText, this.id);
      this.setState({ commentText: "", error: "" });
    }
  };
  handleChange = event => {
    this.setState({ commentText: event.target.value });
  };
  render() {
    const { posts } = this.props;
    const { comments } = posts[this.id];

    return (
      <div>
        <PostCard {...posts[this.id]} />
        <ul>{comments.map(this.renderComments)}</ul>
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
      </div>
    );
  }
}
const mapStateToProps = ({ posts }) => ({ posts });
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addComment }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePagePost);
