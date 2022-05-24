import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Posts from "./Posts";
import { getoneData } from "../Redux/Login/action";

const Container = styled.div`
  background-color: whitesmoke;
  width: 65%;
  margin: auto;
  margin-top: 5%;
  padding-bottom: 30px;
  .profile {
    display: flex;
    justify-content: center;
    padding-top: 5%;
  }
  .image {
    width: 19%;
  }
  .image img {
    border-radius: 50%;
    width: 100%;
  }
  .details {
    display: flex;
    margin-top: 30px;
    margin-left: 7%;
  }
  .details h4 {
    text-align: center;
    padding-left: 50px;
  }
  .details h4 h3 {
    margin: 0;
    padding: 0;
  }
`;
const Post = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: auto;
`;

const Profile = () => {
  const userDetails = useSelector((store) => store.login.users);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getoneData());

    axios
      .get(
        `http://localhost:8080/singleuser/${sessionStorage.getItem("userid")}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container>
        <div className="profile">
          <div className="image">
            <img src={userDetails.image} alt="userimg" />
          </div>
          <div className="details">
            <h4>
              {data.length} <br /> <span>Posts</span>
            </h4>
            <h4>
              0 <br /> <span>Followers</span>
            </h4>
            <h4>
              0 <br /> <span>Following</span>
            </h4>
          </div>
        </div>
      </Container>
      <Post>
        {data.map((el) => (
          <Posts
            id={el._id}
            key={el._id}
            image={el.image}
            caption={el.caption}
            username={el.user?.username}
            userImage={el.user?.image}
          />
        ))}
      </Post>
    </>
  );
};

export default Profile;
