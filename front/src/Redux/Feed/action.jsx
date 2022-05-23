import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGIN_LOADING = "LOGIN_LOADING";

export const LOGIN_LOGOUT = "LOGIN_LOGOUT";

export const GET_ONE = "GET_ONE";

export const loginLoading = () => ({ type: LOGIN_LOADING });

export const loginError = () => ({ type: LOGIN_ERROR });

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginLogout = () => ({
  type: LOGIN_LOGOUT,
});

export const getone = (payload) => ({
  type: GET_ONE,
  payload,
});

export const loginSuccessData = async (data, navigate, toast) => (dispatch) => {
  dispatch(loginLoading());
  await axios
    .post("http://localhost:8080/login", data)
    .then(({ data }) => {
      dispatch(loginSuccess(data));
      sessionStorage.setItem("authtoken", data.token);
      sessionStorage.setItem("userid", data.user._id);
      toast.success("Login successfull");
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response.data);
      dispatch(loginError());
    });
};
