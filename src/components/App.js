import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PostCardList from "./PostCardList";
import SinglePagePost from "./SinglePagePost";

class App extends Component {
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

export default App;
