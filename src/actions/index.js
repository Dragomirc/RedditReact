import { FETCH_POSTS, ADD_COMMENT, UP_VOTE, DOWN_VOTE } from "./types";

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS
  };
};
export const addComment = (text, id) => {
  return {
    type: ADD_COMMENT,
    payload: text,
    id: id
  };
};
