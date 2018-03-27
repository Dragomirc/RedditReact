import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import PostCardList from "./PostCardList";
import SinglePagePost from "./SinglePagePost";
import { fetchPosts } from "../actions/index";

//Added for socket.io
import io from "socket.io-client";

class App extends Component {
  //Added for socket.io
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
  // componentWillMount() {
  //   this.props.fetchPosts();
  // }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={PostCardList} />
          <Route
            exact
            path="/post/:id"
            // component={SinglePagePost}
            //Added for socket.io
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
