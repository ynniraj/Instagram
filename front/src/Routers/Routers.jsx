import React from "react";
import { Routes, Route } from "react-router-dom";
import Handle from "../Components/Handle";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
const Routers = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/loginsignup" element={<Handle />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Routers;
