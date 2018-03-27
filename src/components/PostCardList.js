import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import PostCard from "./PostCard";

class PostCardList extends Component {
  renderPosts = ({ title, description, votes, comments, id }) => (
    <PostCard
      key={id}
      title={title}
      text={description}
      votes={votes}
      comments={comments}
      id={id}
    />
  );

  render() {
    console.log("Posts", this.props.posts);

    return <ul>{_.map(this.props.posts, this.renderPosts)}</ul>;
  }
}
const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(PostCardList);
