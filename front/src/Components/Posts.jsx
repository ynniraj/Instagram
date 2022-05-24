import React from "react";
import {
  FaRegUserCircle,
  FaRegHeart,
  FaRegComment,
  FaShare,
} from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 30px;

  .header {
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
  }
  .header p {
    font-size: 30px;
  }
  .header h3 {
    font-size: 20px;
    padding: 2px;
    padding-left: 10px;
  }
  .uploadimg {
    width: 90%;
    margin: auto;
    padding: 5px;
    height: 100%;
  }
  .uploadimg img {
    width: 100%;
    object-fit: contain;
  }
  .icons {
    padding: 10px;
    font-size: 22px;
  }
  .i {
    padding-left: 18px;
  }
  .caption {
    padding-left: 30px;
    margin-top: -6px;
  }
  .caption h4 {
    font-size: 16px;
    font-weight: 600;
  }
`;

const Posts = ({ caption, image, id }) => {
  return (
    <Container>
      <div className="header">
        <p>
          <FaRegUserCircle />
        </p>
        <h3>Neeraj Yadav</h3>
      </div>
      <div className="uploadimg">
        <img src={image} alt="images" />
      </div>
      <div className="icons">
        <FaRegHeart className="i" />
        <FaRegComment className="i" />
        <FaShare className="i" />
      </div>
      <div className="caption">
        <h4>Neeraj Yadav</h4>
        <p>{caption}</p>
      </div>
    </Container>
  );
};

export default Posts;
