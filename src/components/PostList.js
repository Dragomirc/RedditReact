import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class PostList extends Component {
  renderPosts = ({ title, text, votes, comments }) => (
    <Post title={title} text={text} votes={votes} comments={comments} />
  );

  render() {
    return <ul>{this.props.posts.map(this.renderPosts)}</ul>;
  }
}
const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(mapStateToProps)(PostList);
