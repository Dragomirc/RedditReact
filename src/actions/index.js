import { FETCH_POSTS } from "./types";
import _ from "lodash";

export const fetchPosts = socket => {
  return dispatch => {
    socket.on("initialPostList", res => {
      dispatch({
        type: FETCH_POSTS,
        payload: _.mapKeys(res, "id")
      });
    });
  };
};

//!!!!      Version without socket.io     !!!!
// export const fetchPosts = posts => {
//   return {
//     type: FETCH_POSTS,
//     payload: posts
//   };
// };
// export const addComment = (text, id) => {
//   return {
//     type: ADD_COMMENT,
//     payload: text,
//     id: id
//   };
// };
// export const updateVotes = (value, id) => {
//   return {
//     type: UPDATE_VOTES,
//     payload: value,
//     id: id
//   };
// };
