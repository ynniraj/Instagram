import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_LOGOUT,
  GET_ONE,
} from "./action";

const initialState = {
  users: {},
  token: "",
  loading: false,
  error: false,
};
export const loginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };

    case LOGIN_ERROR:
      return { ...store, loading: false, error: true };

    case LOGIN_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        users: payload,
        token: payload,
      };

    case GET_ONE:
      return { ...store, users: payload };

    case LOGIN_LOGOUT:
      return { ...initialState };

    default:
      return store;
  }
};
