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

export const loginSuccessData = (data, navigate) => (dispatch) => {
  dispatch(loginLoading());
  axios
    .post("http://localhost:8080/login", data)
    .then(({ data }) => {
      console.log(data);
      dispatch(loginSuccess(data));
      sessionStorage.setItem("authtoken", data.token);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    })
    .catch((err) => {
      dispatch(loginError());
    });
};

// export const getoneData = () => (dispatch) => {
//   const usertoken = sessionStorage.getItem("authtoken");

//   axios
//     .get(`http://localhost:8080/getone/${userid}`, {
//       headers: { token: `Bearer ${usertoken}` },
//     })
//     .then(({ data }) => {
//       dispatch(getone(data));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
