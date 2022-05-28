import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { getoneData } from "../Redux/Login/action";

const Container = styled.div`
  background-color: whitesmoke;
  .header {
    display: flex;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .image {
    width: 22%;
  }
  .image img {
    width: 100%;
    border-radius: 50%;
  }
  .follow {
    margin-top: -6px;
    h3 {
      padding-left: 14px;
    }
  }
`;

const Suggestion = () => {
  const dispatch = useDispatch();

  const [follow, setFollow] = useState();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/alluser`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userid = sessionStorage.getItem("userid");

  const filterData = data.filter((elem) => {
    return userid !== elem._id;
  });

  const handleFollow = (id) => {
    
    setFollow(id);
    const payload = {
      following: id,
    };
    axios
      .patch(`http://localhost:8080/userfollow/${userid}`, payload)
      .then((res) => {
        dispatch(getoneData());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUnFollow = (id) => {
    const payload = {
      following: id,
    };
    axios
      .patch(`http://localhost:8080/userunfollow/${userid}`, payload)
      .then((res) => {
        dispatch(getoneData());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {filterData.map((el) => (

        <div className="header" key={el._id}>
          
          <div className="image">
            <img src={el.image} alt="" />
          </div>
          <div className="follow">
            <h3>{el.username}</h3>

            <Button
              sx={{
                width: "80%",
                fontSize: "10px",
                marginLeft: "10px",
                marginTop: "3px",
              }}
              variant="contained"
              onClick={
                follow === el._id
                  ? () => handleUnFollow(el._id)
                  : () => handleFollow(el._id)
              }
            >
              {follow === el._id ? "Unfollow" : "Follow"}
            </Button>
            
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Suggestion;
