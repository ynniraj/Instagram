import React, { useState } from "react";
import styled from "styled-components";
import {
  FaRegCompass,
  FaRegHeart,
  FaRegUserCircle,
  FaSearch,
  FaSignOutAlt,
  FaRegPlusSquare,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginLogout } from "../Redux/Login/action";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Grid, TextField } from "@mui/material";
import FileBase64 from "react-file-base64";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginSuccess } from "../Redux/Login/action";
import { feedSuccessData } from "../Redux/Feed/action";

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
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState();

  const navigate = useNavigate();
  const auth = useSelector((store) => store.login.token);
  const userDetails = useSelector((store) => store.login.users);

  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(loginLogout());
    sessionStorage.setItem("authtoken", "");
    sessionStorage.setItem("userid", "");
  };

  const handleUploadPost = (e) => {
    e.preventDefault();

    const payload = {
      caption: e.target.caption.value,
      image: file,
      user: userDetails._id,
    };
    axios
      .post("http://localhost:8080/post", payload)
      .then((res) => {
        toast.success("Upload Successfully");
        console.log(res);
        dispatch(feedSuccessData());
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };
  return (
    <>
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
            {auth ? (
              <>
                {" "}
                <p
                  className="navigation-link notifica"
                  onClick={() => setOpen(true)}
                >
                  <FaRegPlusSquare />
                </p>
              </>
            ) : null}
            <p className="navigation-link">
              <FaRegCompass />
            </p>
            <p className="navigation-link notifica">
              <FaRegHeart />
            </p>

            <p
              className="navigation-link"
              onClick={
                auth
                  ? () => navigate("/profile")
                  : () => navigate("/loginsignup")
              }
            >
              <FaRegUserCircle />
            </p>
            {auth ? (
              <>
                <p
                  id="signout"
                  className="navigation-link"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt />
                </p>
              </>
            ) : null}
          </div>
        </div>
      </Container>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "600px",
            height: "250px",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <Box
            noValidate
            sx={{ mt: 1, padding: "30px" }}
            component="form"
            onSubmit={handleUploadPost}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="caption"
                  required
                  fullWidth
                  id="caption"
                  label="Caption"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="upload-photo">
                  <FileBase64
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    multiple={false}
                    onDone={(file) => {
                      console.log(JSON.stringify(file.base64));
                      setFile(file.base64);
                    }}
                  />
                </label>
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
            >
              Upload Post
            </Button>
          </Box>
        </Box>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Navbar;
