import { FETCH_POSTS } from "../actions/types";

export default (state = {}, action) => {
  const { id, payload, type } = action;
  const currentPost = state[id];
  switch (type) {
    case FETCH_POSTS:
      if (payload) {
        return { ...state, ...payload };
      }
      break;
    default:
      return state;
  }
};
