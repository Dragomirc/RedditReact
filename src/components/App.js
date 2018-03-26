import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import PostCardList from "./PostCardList";
import SinglePagePost from "./SinglePagePost";
import { fetchPosts } from "../actions/index";

class App extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={PostCardList} />
          <Route exact path="/post/:id" component={SinglePagePost} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchPosts })(App);
