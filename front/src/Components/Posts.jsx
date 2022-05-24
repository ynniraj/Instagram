import React from "react";
import { FaRegUserCircle, FaRegComment, FaShare } from "react-icons/fa";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Container = styled.div`
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
    margin-bottom: 30px;
  }
  .caption h4 {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 5px;
  }
`;

const Posts = ({ caption, image, id, username }) => {
  const [checked, setChecked] = React.useState(false);
  const handleLikeChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Container>
      <div className="header">
        <p>
          <FaRegUserCircle />
        </p>
        <h3>{username}</h3>
      </div>
      <div className="uploadimg">
        <img src={image} alt="images" />
      </div>
      <div className="icons">
        <span>
          {" "}
          <Checkbox
            onChange={handleLikeChange}
            sx={{
              marginTop: "-10px",
              marginLeft: "16px",
              marginRight: "-12px",
              color: "black",
            }}
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
            checked={checked}
          />
        </span>
        <FaRegComment className="i" />
        <FaShare className="i" />
      </div>
      <div className="caption">
        <h4>{username}</h4>
        <p>{caption}</p>
      </div>
    </Container>
  );
};

export default Posts;
