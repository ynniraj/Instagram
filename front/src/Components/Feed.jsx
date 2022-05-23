import React from "react";
import styled from "styled-components";

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
  return (
    <Container>
      <h1>feed</h1>
      <h1>feed</h1>
      <h1>feed</h1>
      <h1>feed</h1>
    </Container>
  );
};

export default Feed;
