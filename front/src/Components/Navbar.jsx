import React from "react";
import styled from "styled-components";
import {
  FaRegCompass,
  FaRegHeart,
  FaRegUserCircle,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Container = styled.div`
  body {
    background: #fafafa;
  }

  /* start header */

  .navigation {
    background-color: #ffffff;
    height: 80px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px 50px;
    box-sizing: border-box;
    z-index: 2;
    /* animation magic */
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
  }

  .shrink {
    height: 50px;
  }

  .navigation .logo p {
    position: relative;
    color: #000000;
    font-size: 24px;
    font-family: sans-serif;
    text-decoration: none;
    cursor: pointer;
  }

  .navigation-search-container {
    position: relative;
  }

  .navigation-search-container input {
    background-color: #fafafa;
    padding: 3px 20px;
    padding-left: 25px;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.0975);
    border-radius: 3px;
    font-size: 14px;
  }

  .navigation-search-container .fa-search {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 11px;
    color: rgba(0, 0, 0, 0.5);
  }

  @media only screen and (min-width: 320px) and (max-width: 650px) {
    /* Navigation */
    .navigation {
      padding: 0 20px;
      justify-content: space-between;
    }
    .navigation-search-container {
      display: none;
    }
    .navigation-icons {
      display: flex;
    }
  }

  .navigation-icons {
    display: flex;
  }

  .navigation-search-container input:focus {
    outline: none;
  }

  .navigation-search-container input::placeholder {
    text-align: center;
  }

  .navigation-icons p {
    text-decoration: none;
    font-size: 22px;
    padding-left: 26px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="navigation">
        <div className="logo">
          <p className="no-underline" onClick={() => navigate("/")}>
            Instagram
          </p>
        </div>
        <div className="navigation-search-container">
          <FaSearch className="fa-search" />
          <input className="search-field" type="text" placeholder="Search" />
          <div className="search-container">
            <div className="search-container-box">
              <div className="search-results"></div>
            </div>
          </div>
        </div>
        <div className="navigation-icons">
          <p className="navigation-link">
            <FaRegCompass />
          </p>
          <p className="navigation-link notifica">
            <FaRegHeart />
          </p>
          <p className="navigation-link">
            <FaRegUserCircle />
          </p>
          <p id="signout" className="navigation-link">
            <FaSignOutAlt />
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
