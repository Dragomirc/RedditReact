import React from "react";

const Post = ({ title, text, comments, votes }) => (
  <div>
    <h3>{title}</h3>
    <p>{text}</p>
    <div>Comments:{comments.length}</div>
    <div>Votes:{votes}</div>
  </div>
);

export default Post;
