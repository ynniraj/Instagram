import { FEED_ERROR, FEED_LOADING, FEED_SUCCESS } from "./action";

const initialState = {
  feed: [],
};
export const feedReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case FEED_LOADING:
      return { ...store, loading: true };

    case FEED_ERROR:
      return { ...store, loading: false, error: true };

    case FEED_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        feed: payload,
      };

    default:
      return store;
  }
};
