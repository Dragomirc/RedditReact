import { FETCH_POSTS, ADD_COMMENT } from "../actions/types";
import { mockApiResponse } from "./mockApiResponse";

export default (state = {}, action) => {
  const { id, payload, type } = action;
  const currentPost = state[id];

  switch (type) {
    case FETCH_POSTS:
      return mockApiResponse;

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
    default:
      return state;
  }
};
