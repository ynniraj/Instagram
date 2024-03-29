import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [file, setFile] = useState();

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
      image: file,
    };
    console.log(payload);
    axios
      .post("http://localhost:8080/register", payload)
      .then((res) => {
        console.log(res);
        toast.success("Register successfull");
        setTimeout(() => {
          handle(true);
        }, 2000);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.response.data);
        toast.error(e.response.data.errors[0]?.msg);
      });
  };

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <h3>Register</h3>
        <label htmlFor="upload-photo">
          <FileBase64
            id="upload-photo"
            name="upload-photo"
            type="file"
            multiple={false}
            onDone={(file) => {
              setFile(file.base64);
            }}
          />
        </label>
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
      <ToastContainer />
    </Container>
  );
};

export default Register;
