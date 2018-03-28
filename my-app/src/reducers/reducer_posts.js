import { FETCH_POSTS } from "../actions/types";

export default (state = {}, action) => {
  const { payload, type } = action;

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
