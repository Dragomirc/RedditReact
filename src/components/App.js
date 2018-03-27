import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import PostCardList from "./PostCardList";
import SinglePagePost from "./SinglePagePost";
import { fetchPosts } from "../actions/index";
import io from "socket.io-client";

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = io.connect("http://localhost:3237");
  }
  componentWillMount() {
    this.props.fetchPosts(this.socket);
  }
  componentWillUnmount() {
    this.socket.disconnect();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={routeProps => (
              <PostCardList {...routeProps} socket={this.socket} />
            )}
          />
          <Route
            exact
            path="/post/:id"
            render={routeProps => (
              <SinglePagePost {...routeProps} socket={this.socket} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchPosts })(App);
