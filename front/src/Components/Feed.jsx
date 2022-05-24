import React, { useEffect } from "react";
import styled from "styled-components";
import Posts from "./Posts";
import Suggestion from "./Suggestion";
import { useDispatch, useSelector } from "react-redux";
import { feedSuccessData } from "../Redux/Feed/action";
import { getoneData } from "../Redux/Login/action";

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  display: flex;
  margin-top: 6%;
  .first {
    width: 50%;
    margin: auto;
  }
  .second {
    width: 20%;
    margin-right: 4%;
  }
`;

const Feed = () => {
  const dispatch = useDispatch();

  const feedData = useSelector((store) => store.feeds.feed);

  useEffect(() => {
    dispatch(feedSuccessData());
    dispatch(getoneData());
  }, [dispatch]);

  return (
    <>
      <Container>
        <div className="first">
          {feedData.map((el) => (
            <Posts
              id={el._id}
              key={el._id}
              image={el.image}
              caption={el.caption}
              username={el.user?.username}
              userImage={el.user?.image}
            />
          ))}
        </div>
        <div className="second">
          <Suggestion />
        </div>
      </Container>
    </>
  );
};

export default Feed;
