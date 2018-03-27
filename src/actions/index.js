import { FETCH_POSTS, ADD_COMMENT, UPDATE_VOTES } from "./types";

// Added for socket.io

// export const fetchPosts = socket => {
//   return dispatch => {
//     socket.on("initialPostList", res => {
//       dispatch({
//         type: FETCH_POSTS,
//         payload: res
//       });
//     });
//   };
// };
export const fetchPosts = posts => {
  return {
    type: FETCH_POSTS,
    payload: posts
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
