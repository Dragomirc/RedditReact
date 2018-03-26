import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ title, text, comments, votes, id }) => (
  <li>
    <Link to={`/post/${id}`}>
      <h3>{title}</h3>
      <p>{text}</p>
      <div>Comments:{comments.length}</div>
      <div>Votes:{votes}</div>
    </Link>
  </li>
);

export default PostCard;
