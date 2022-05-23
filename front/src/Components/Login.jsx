import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: whitesmoke;
  width: 25%;
  height: 60%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  #email,
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
  const [text, setText] = useState({
    email: "",
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
    const payload = {
      email: text.email,
      password: text.password,
    };
    console.log(payload);
  };

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="text"
          value={text.email}
          onChange={handleChange}
          id="email"
          placeholder="Email"
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
    </Container>
  );
};

export default Login;
