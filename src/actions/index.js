import { FETCH_POSTS, ADD_COMMENT, UPDATE_VOTES } from "./types";

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

export const updateVotes = (value, id) => {
  return {
    type: UPDATE_VOTES,
    payload: value,
    id: id
  };
};
