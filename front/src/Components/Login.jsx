import React, { useState } from "react";

const Login = () => {
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
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text.email}
          onChange={handleChange}
          id="email"
          placeholder="Email"
        />
        <input
          type="text"
          value={text.password}
          onChange={handleChange}
          id="password"
          placeholder="Password"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Login;
