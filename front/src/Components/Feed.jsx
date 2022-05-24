import React, { useEffect } from "react";
import styled from "styled-components";
import Posts from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { feedSuccessData } from "../Redux/Feed/action";
import { getoneData } from "../Redux/Login/action";

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  background-color: whitesmoke;
  margin: auto;
  margin-top: 6%;
`;

const Feed = () => {
  const dispatch = useDispatch();

  const feedData = useSelector((store) => store.feeds.feed);

  useEffect(() => {
    dispatch(feedSuccessData());
    dispatch(getoneData());
  }, [dispatch]);

  return (
    <Container>
      {feedData.map((el) => (
        <Posts
          id={el._id}
          key={el._id}
          image={el.image}
          caption={el.caption}
          username={el.user.username}
        />
      ))}
    </Container>
  );
};

export default Feed;
