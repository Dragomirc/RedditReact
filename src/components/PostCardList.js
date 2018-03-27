import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import PostCard from "./PostCard";

class PostCardList extends Component {
  renderPosts = ({ title, description, votes, comments, id }) => {
    return (
      <PostCard
        key={id}
        title={title}
        text={description}
        votes={votes}
        comments={comments}
        id={id}
        socket={this.props.socket}
      />
    );
  };

  render() {
    console.log("PostCardList socket", this.props.socket);

    return <ul>{_.map(this.props.posts, this.renderPosts)}</ul>;
  }
}
const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(PostCardList);
