import axios from "axios";

export const FEED_SUCCESS = "FEED_SUCCESS";

export const FEED_ERROR = "FEED_ERROR";

export const FEED_LOADING = "FEED_LOADING";

export const feedLoading = () => ({ type: FEED_LOADING });

export const feedError = () => ({ type: FEED_ERROR });

export const feedSuccess = (payload) => ({
  type: FEED_SUCCESS,
  payload,
});

export const feedSuccessData = () => async (dispatch) => {
  dispatch(feedLoading());
  await axios
    .get("http://localhost:8080/allpost")
    .then(({ data }) => {
      dispatch(feedSuccess(data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(feedError());
    });
};
