import React from "react";
import Login from "./Login";
import Register from "./Register";
import ShowCard from "./ShowCard";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Handle = () => {
  const { loading } = useSelector((store) => store.login);

  const [handle, setHandle] = React.useState(true);
  return (
    <Container>
      {loading ? (
        <>
          <img
            src="https://i.pinimg.com/originals/d7/34/49/d73449313ecedb997822efecd1ee3eac.gif"
            alt=""
          />
        </>
      ) : (
        <>
          <ShowCard />
          {handle ? (
            <Login handle={setHandle} />
          ) : (
            <Register handle={setHandle} />
          )}
        </>
      )}
    </Container>
  );
};

export default Handle;
