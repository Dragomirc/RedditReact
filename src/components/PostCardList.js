import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import PostCard from "./PostCard";
import { bindActionCreators } from "redux";

import { fetchPosts } from "../actions/index";

class PostCardList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts = ({ title, text, votes, comments, id }) => (
    <PostCard
      key={id}
      title={title}
      text={text}
      votes={votes}
      comments={comments}
      id={id}
    />
  );

  render() {
    return <ul>{_.map(this.props.posts, this.renderPosts)}</ul>;
  }
}
const mapStateToProps = ({ posts }) => ({ posts });
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchPosts }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(PostCardList);
