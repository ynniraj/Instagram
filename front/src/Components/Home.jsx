import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../Redux/Login/action";
import Handle from "./Handle";

const Home = () => {
  const dispatch = useDispatch();

  const auth = useSelector((store) => store.login.token);

  const authtoken = sessionStorage.getItem("authtoken");
  dispatch(loginSuccess(authtoken));

  return <>{auth ? "home" : <Handle />}</>;
};

export default Home;
