import { FETCH_POSTS, ADD_COMMENT, UPDATE_VOTES } from "./types";
import _ from "lodash";
// Added for socket.io

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

export const addComment = (socket, commentText, id) => {
  return dispatch => {
    socket.emit("addComment", { commentText: commentText, id: id });
    // dispatch({
    //   type: ADD_COMMENT,
    //   payload: text,
    //   id: id
    // });
  };
};

// this.props.socket.emit("addComment", {
//   commentText: this.state.commentText,
//   id: this.id
// });

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

export const updateVotes = (value, id) => {
  return {
    type: UPDATE_VOTES,
    payload: value,
    id: id
  };
};
