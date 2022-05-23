import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  background-color: whitesmoke;
  width: 25%;
  height: 70%;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  #email,
  #password,
  #username {
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

const Register = ({ handle }) => {
  const [text, setText] = useState({
    email: "",
    password: "",
    username: "",
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
      username: text.username,
      password: text.password,
    };

    axios
      .post("http://localhost:8080/register", payload)
      .then((res) => {
        console.log(res);
        handle(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <h3>Register</h3>
        <input
          type="text"
          value={text.email}
          onChange={handleChange}
          id="email"
          placeholder="Email"
        />
        <input
          type="text"
          value={text.username}
          onChange={handleChange}
          id="username"
          placeholder="Username"
        />
        <input
          type="text"
          value={text.password}
          onChange={handleChange}
          id="password"
          placeholder="Password"
        />
        <input type="submit" value="Register" className="btn" />
      </form>
      <p>
        Already have a account
        <span onClick={() => handle(true)}> Login</span>
      </p>
    </Container>
  );
};

export default Register;
