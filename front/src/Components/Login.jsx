import React, { useState } from "react";
import styled from "styled-components";
import { loginSuccessData } from "../Redux/Login/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  background-color: whitesmoke;
  width: 25%;
  height: 60%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  #username,
  #password {
    width: 80%;
    padding: 15px;
    margin: 10px;
    outline: none;
    border-radius: 5px;
    border: none;
    font-size: 16px;
  }

  .btn {
    width: 90%;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    background-color: lightgrey;
    border: none;
    cursor: pointer;
  }
  p {
    padding-bottom: 10px;
  }
  span {
    color: orangered;
    cursor: pointer;
    font-size: 18px;
  }
`;

const Login = ({ handle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [text, setText] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setText({
      ...text,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.username || !text.password) {
      toast.error("All Fields Are Mandatory");
    } else {
      const payload = {
        username: text.username,
        password: text.password,
      };
      dispatch(loginSuccessData(payload, navigate, toast));
    }
  };

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="text"
          value={text.username}
          onChange={handleChange}
          id="username"
          placeholder="Username"
        />{" "}
        <br />
        <input
          type="text"
          value={text.password}
          onChange={handleChange}
          id="password"
          placeholder="Password"
        />{" "}
        <br />
        <input type="submit" className="btn" value="Login" />
      </form>
      <p>
        Create a new account <span onClick={() => handle(false)}>Register</span>
      </p>
      <ToastContainer />
    </Container>
  );
};

export default Login;
