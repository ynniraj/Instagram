import React from "react";
import Login from "./Login";
import Register from "./Register";
import ShowCard from "./ShowCard";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Handle = () => {
  const [handle, setHandle] = React.useState(true);
  return (
    <Container>
      <ShowCard />
      {handle ? <Login handle={setHandle} /> : <Register handle={setHandle} />}
    </Container>
  );
};

export default Handle;
