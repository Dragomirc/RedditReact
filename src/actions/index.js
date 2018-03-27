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
