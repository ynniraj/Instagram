import React from "react";
import { Routes, Route } from "react-router-dom";
import Handle from "../Components/Handle";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
const Routers = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/loginsignup" element={<Handle />} />
      </Routes>
    </>
  );
};

export default Routers;
