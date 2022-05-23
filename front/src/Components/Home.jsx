import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../Redux/Login/action";
import Feed from "./Feed";
import Handle from "./Handle";
import { getoneData } from "../Redux/Login/action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getoneData());
  }, [dispatch]);

  const auth = useSelector((store) => store.login.token);

  const authtoken = sessionStorage.getItem("authtoken");
  dispatch(loginSuccess(authtoken));

  return <>{auth ? <Feed /> : <Handle />}</>;
};

export default Home;
