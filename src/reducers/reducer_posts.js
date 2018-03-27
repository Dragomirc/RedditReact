import { FETCH_POSTS, ADD_COMMENT, UPDATE_VOTES } from "../actions/types";
import { mockApiResponse } from "./mockApiResponse";

export default (state = {}, action) => {
  const { id, payload, type } = action;
  const currentPost = state[id];
  switch (type) {
    case FETCH_POSTS:
      // added for socket.io
      if (payload) {
        return { ...state, ...payload };
      }
    // return mockApiResponse;

    case ADD_COMMENT:
      if (payload) {
        return {
          ...state,
          [id]: {
            ...currentPost,
            comments: [payload, ...currentPost.comments]
          }
        };
      }
      break;
    case UPDATE_VOTES:
      if (payload) {
        return {
          ...state,
          [id]: {
            ...currentPost,
            votes: currentPost.votes + payload
          }
        };
      }
      break;
    default:
      return state;
  }
};
